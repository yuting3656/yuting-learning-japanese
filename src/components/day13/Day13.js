import React, { useRef, useState } from "react";
import { createWorker } from "tesseract.js";
import { Grid, Button, Paper, Popover } from "@mui/material";
import CanvasDraw from "react-canvas-draw";
import { GithubPicker } from "react-color";
import LinearProgress from "@mui/material/LinearProgress";

//
// IMPORT ZONE
//

const Day13 = () => {
  const canvasRef = useRef(null);
  const [ocrResult, setOcrResult] = useState(undefined);
  const [selectedColor, setSelectedColor] = useState("#000");
  const [colorAnchor, setColorAnchor] = useState(null);
  const [ocrStatus, setOcrStatus] = useState(0); // 0: no start, 1: processing, 2: done

  const resolvePaintingText = async (dataUrl) => {
    const worker = await createWorker();
    await worker.loadLanguage("jpn");
    await worker.initialize("jpn");
    const {
      data: { text },
    } = await worker.recognize(dataUrl);

    await worker.terminate();
    return text;
  };

  const handleSaveOnClick = async () => {
    setOcrStatus(1);
    const dataUrl = canvasRef.current.getDataURL();
    const ocrText = await resolvePaintingText(dataUrl);
    setOcrResult(ocrText);
    setOcrStatus(2);
  };
  const handleUndoOnClick = () => {
    canvasRef.current.undo();
  };
  const handleColorOnClick = (e) => {
    setColorAnchor(e.currentTarget);
  };
  const handleColorOnClose = () => {
    setColorAnchor(null);
  };

  const handleColorOnChange = (color) => {
    // color = {
    //   hex: '#333',
    //   rgb: {
    //     r: 51,
    //     g: 51,
    //     b: 51,
    //     a: 1,
    //   },
    //   hsl: {
    //     h: 0,
    //     s: 0,
    //     l: .20,
    //     a: 1,
    //   },
    // }
    const h = color.hex;
    setSelectedColor(h);
    handleColorOnClose();
  };
  const colorOpen = Boolean(colorAnchor);
  const colorButtonId = colorOpen ? "simple-popover" : undefined;
  return (
    <Grid
      container
      spacing={{ mobile: 1, tablet: 2, laptop: 3 }}
      style={{ textAlign: "center" }}
    >
      <Grid item xs={12}>
        {" "}
        <h3>Day13 畫一下給看一下！ </h3>
      </Grid>
      <Grid container xs={12} justifyContent={"center"}>
        <Grid item xs={12}>
          <Paper elevation={2}>
            <CanvasDraw
              style={{ margin: "auto" }}
              brushColor={selectedColor}
              // ref={(rf) => (canvasRef.current = rf)}
              ref={canvasRef}
              canvasWidth={window.innerWidth > 1024 ? 800 : 300}
            />
          </Paper>
        </Grid>
      </Grid>
      <Grid container xs={12} spacing={2} justifyContent={"center"}>
        <Grid item>
          <Button variant="contained" onClick={() => handleSaveOnClick()}>
            看一下我寫的是什麼字！
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="success"
            onClick={() => handleUndoOnClick()}
          >
            上一步
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            style={{ backgroundColor: "yellow", color: "black" }}
            onClick={(e) => handleColorOnClick(e)}
            aria-describedby={colorButtonId}
          >
            顏色
          </Button>
          <Popover
            anchorEl={colorAnchor}
            open={colorButtonId}
            onClose={() => handleColorOnClose()}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <GithubPicker
              color={selectedColor}
              onChange={(color) => handleColorOnChange(color)}
            />
          </Popover>
        </Grid>
      </Grid>
      <Grid container justifyContent={"center"}>
        <Grid item xs={12}>
          <h3>判斷是什麼字 (只有日文唷！！) </h3>
        </Grid>
        <Grid item xs={12}>
          {ocrStatus === 1 ? <LinearProgress color="success" /> : null}
          {ocrStatus === 2 ? (
            <div style={{ fontSize: "18em" }}>{ocrResult}</div>
          ) : null}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Day13;
