import { Alert, Button, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

//
// IMPORT ZONE
//

function Day19() {
  const { transcript, resetTranscript } = useSpeechRecognition();
  const [isBrowserSupportFlag, setIsBrowserSupportFlag] = useState(false);

  useEffect(() => {
    if (SpeechRecognition.browserSupportsSpeechRecognition()) {
      setIsBrowserSupportFlag(true);
    }
  }, []);

  const handleStartListenOnClick = () => {
    SpeechRecognition.startListening({ language: "ja" });
  };
  const handleStopListenOnClick = () => {
    SpeechRecognition.stopListening();
  };
  const handleReStartListenOnClick = () => {
    resetTranscript();
  };

  return (
    <Grid
      container
      spacing={{ mobile: 1, tablet: 2, laptop: 3 }}
      style={{ textAlign: "center" }}
    >
      <Grid item xs={12}>
        <h1>Day 19 說一下話吧！！</h1>
      </Grid>
      <Grid item xs={12}>
        {!isBrowserSupportFlag ? (
          <>
            {" "}
            <Alert severity="warning">哭哭！！！流臉泣不支援啦！！！</Alert>
          </>
        ) : (
          <Grid container>
            <Grid item xs={4}>
              {" "}
              <Button
                variant="contained"
                style={{ backgroundColor: "green", color: "snow" }}
                onClick={() => handleStartListenOnClick()}
              >
                {" "}
                開始聽
              </Button>
            </Grid>
            <Grid item xs={4}>
              {" "}
              <Button
                variant="contained"
                style={{ backgroundColor: "red", color: "snow" }}
                onClick={() => handleStopListenOnClick()}
              >
                {" "}
                停止
              </Button>
            </Grid>
            <Grid item xs={4}>
              {" "}
              <Button
                variant="contained"
                type="success"
                onClick={() => handleReStartListenOnClick()}
              >
                {" "}
                重新聽
              </Button>
            </Grid>
          </Grid>
        )}
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h1" gutterBottom>
          {transcript}
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Day19;
