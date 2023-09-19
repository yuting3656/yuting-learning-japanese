import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";

//
// IMPORT ZONE
//

const Day04 = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [utterance, setUtterance] = useState(null);
  const [voice, setVoice] = useState(null);
  const [text, setText] = useState("きゅうりょう どろぼう");

  useEffect(() => {
    const synth = window.speechSynthesis;
    const u = new SpeechSynthesisUtterance(text);
    synth.addEventListener("voiceschanged", () => {
      const voices = synth.getVoices();
      u.voice = voices[0];
      setVoice(voices[0]);
    });
    setUtterance(u);

    return () => {
      synth.cancel();
      synth.removeEventListener("voiceschanged", () => {
        setVoice(null);
      });
    };
  }, [text]);
  const handleVocieOnChange = (v) => {
    setVoice(v.target.value);
  };
  const handleTextOnChange = (e) => {
    setText(e.target.value);
  };

  const handlePlay = () => {
    const synth = window.speechSynthesis;

    if (isPaused) {
      synth.resume();
    } else {
      utterance.voice = voice;
      synth.speak(utterance);
    }
    setIsPaused(false);
  };
  const handlePause = () => {
    const synth = window.speechSynthesis;
    setIsPaused(true);
    synth.pause();
  };

  return (
    <>
      <Grid
        container
        spacing={{ mobile: 1, tablet: 2, laptop: 3 }}
        style={{ textAlign: "center" }}
      >
        <Grid item xs={12}>
          <h1> Day 04</h1>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <TextField
              label="說話"
              value={text}
              onChange={(e) => handleTextOnChange(e)}
            ></TextField>
          </FormControl>
          <Grid item xs={4}></Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid item xs={4}>
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
        </Grid>
        <Grid container sx={12} spacing={2}>
          <Grid item>
            <Button variant="contained" onClick={handlePlay}>
              {isPaused ? "重播" : "播放"}
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="error" onClick={handlePause}>
              暫停
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Day04;
