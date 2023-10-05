import {
  Alert,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import GoldMedal from "./GoldMedal";

//
// IMPORT ZONE
//

function Day21() {
  const [goldCount, setGoldCount] = useState(0);
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

  const [isPaused, setIsPaused] = useState(false);
  const [voice, setVoice] = useState(null);

  useEffect(() => {
    const g = transcript.includes("金メダル");
    if (g) {
      setGoldCount((state) => state + 1);
    }
  }, [transcript]);

  useEffect(() => {
    const synth = window.speechSynthesis;
    const voices = synth.getVoices();
    const jpVoice = voices.filter((d) => d.lang === "ja-JP");
    if (jpVoice.lenth !== 0) {
      setVoice(jpVoice[0]);
    } else {
      setVoice(voices[0]);
    }
  }, []);

  const handlePlay = (words) => {
    const synth = window.speechSynthesis;

    if (isPaused) {
      synth.resume();
    } else {
      const u = new SpeechSynthesisUtterance(words);
      console.log("u", u);
      u.voice = voice;
      synth.speak(u);
    }
    setIsPaused(false);
  };

  const handleVocieOnChange = (v) => {
    setVoice(v.target.value);
  };

  const goldString = "金メダル";
  return (
    <Grid
      container
      spacing={{ mobile: 1, tablet: 2, laptop: 3 }}
      style={{ textAlign: "center" }}
    >
      <Grid item xs={12}>
        <h1>Day 21 說一下 “金牌” 的日文看有什麼趣的事發生！</h1>
      </Grid>
      <Grid item xs={12} md={6}>
        <Grid container spacing={5}>
          <Grid item xs={2} justifyItems="center">
            選擇語系
          </Grid>
          <Grid item xs={10}>
            <FormControl fullWidth>
              <InputLabel> 選擇說話語音</InputLabel>
              <Select
                value={voice?.name}
                label="選擇說話語音"
                onChange={(v) => handleVocieOnChange(v)}
              >
                {window.speechSynthesis.getVoices().map((voice) => (
                  <MenuItem key={voice.name} value={voice}>
                    {voice.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={2}>
            唸給你聽一下:
          </Grid>
          <Grid item xs={10}>
            <Typography variant="h3" gutterBottom>
              {goldString}
              <Button
                size="large"
                startIcon={<RecordVoiceOverIcon />}
                color="primary"
                onClick={() => handlePlay(`${goldString}`)}
              />
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={6}>
        {!isBrowserSupportFlag ? (
          <>
            {" "}
            <Alert severity="warning">哭哭！！！流臉泣不支援啦！！！</Alert>
          </>
        ) : (
          <Grid container xs={12}>
            <Grid item xs={12} md={4}>
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
            <Grid item xs={6} md={4}>
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
            <Grid item xs={6} md={4}>
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
      {Array.from({ length: goldCount }, () => (
        <GoldMedal />
      ))}
    </Grid>
  );
}

export default Day21;
