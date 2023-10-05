import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";

//
// IMPORT ZONE
//

function Day20() {
  const [isPaused, setIsPaused] = useState(false);
  const [voice, setVoice] = useState(null);

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

  const typhoonBreakList = [
    {
      zh: "颱風假",
      ja: "台風休み",
    },
    {
      zh: "我想要颱風假",
      ja: "台風休みたい",
    },
  ];
  return (
    <Grid
      container
      spacing={{ mobile: 1, tablet: 2, laptop: 3 }}
      style={{ textAlign: "center" }}
    >
      <Grid item xs={12}>
        <h1>Day 20 颱風假～～～～想放假 TAT!!!!!</h1>
      </Grid>
      <Grid item xs={12}>
        <Grid container>
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
        </Grid>
      </Grid>
      {typhoonBreakList.map((d) => (
        <Grid item xs={12}>
          <Typography variant="h1" gutterBottom>
            {d.ja}
            <Button
              size="large"
              startIcon={<RecordVoiceOverIcon />}
              color="primary"
              onClick={() => handlePlay(`${d.ja}`)}
            />
          </Typography>
          ({d.zh})
        </Grid>
      ))}
    </Grid>
  );
}

export default Day20;
