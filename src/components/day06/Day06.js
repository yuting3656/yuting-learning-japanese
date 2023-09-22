import { Grid, Button, Paper, Popover } from "@mui/material";
import React, { useRef, useState } from "react";
import CanvasDraw from "react-canvas-draw";
import { GithubPicker } from "react-color";

//
// IMPORT ZONE
//

const Day06 = () => {
  const canvasRef = useRef(null);
  const [imgDataUrl, setImgDataUrl] = useState(undefined);
  const [selectedColor, setSelectedColor] = useState("#000");
  const [colorAnchor, setColorAnchor] = useState(null);
  const handleSaveOnClick = () => {
    const dataUrl = canvasRef.current.getDataURL();
    setImgDataUrl(dataUrl);
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
        <h1>Day 06 畫一下吧！</h1>
      </Grid>
      <Grid item xs={12}>
        <Paper elevation={2}>
          <CanvasDraw
            style={{ margin: "auto" }}
            brushColor={selectedColor}
            // ref={(rf) => (canvasRef.current = rf)}
            ref={canvasRef}
            canvasWidth={window.innerWidth > 1024 ? 800 : 400}
          />
        </Paper>
      </Grid>
      <Grid container xs={4} spacing={2}>
        <Grid item>
          <Button variant="contained" onClick={() => handleSaveOnClick()}>
            存圖
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
      <Grid item xs={12}>
        <h3>存圖的樣子</h3>
      </Grid>
      <Grid item xs={12}>
        {imgDataUrl && <img src={`${imgDataUrl}`} alt="canvasImg" />}
      </Grid>
    </Grid>
  );
};

export default Day06;
