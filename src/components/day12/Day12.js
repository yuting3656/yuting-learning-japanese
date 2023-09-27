import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { katakanaList, hiraganaList } from "../../shared/model/aiueoObj";
import { DataGrid } from "@mui/x-data-grid";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
//
// IMPORT ZONE
//

const Day12 = () => {
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
    synth.addEventListener("voiceschanged", () => {
      console.log("voice", voice);
      const voices = synth.getVoices();
      const jpVoice = voices.filter((d) => d.lang === "ja-JP");
      if (jpVoice.lenth !== 0) {
        setVoice(jpVoice[0]);
      } else {
        setVoice(voices[0]);
      }
    });
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

  const katakanaRow = [...katakanaList].map((d, idx) =>
    Object.assign(d, { id: idx })
  );
  const hiraganaListRow = [...hiraganaList].map((d, idx) =>
    Object.assign(d, { id: idx })
  );

  const columns = [
    {
      field: "name",
      headerName: "行",
      width: 50,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "あ",
      headerName: "あ段",
      width: 50,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "い",
      headerName: "い段",
      width: 50,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "う",
      headerName: "う段",
      width: 50,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "え",
      headerName: "え段",
      width: 50,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "お",
      headerName: "お段",
      width: 50,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "ん",
      headerName: "ん段",
      width: 50,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "words",
      headerName: "念起來",
      width: 100,
      align: "center",
      headerAlign: "center",
      renderCell: (row) => {
        const text = row.formattedValue.toString();
        return (
          <>
            {/* {row.value} */}
            {/* <TextField
              onChange={(e) => {
              
              }}
            /> */}
            <Button
              startIcon={<RecordVoiceOverIcon />}
              color="primary"
              onClick={() => handlePlay(text)}
            />
          </>
        );
      },
    },
  ];

  const handleVocieOnChange = (v) => {
    setVoice(v.target.value);
  };
  return (
    <Grid
      container
      //   spacing={2}
      textAlign={"center"}
      direction={"row"}
      justifyContent={"center"}
    >
      <Grid item xs={12}>
        <Grid item xs={12}>
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
      <Box>
        <Grid item>
          <DataGrid columns={columns} rows={katakanaRow} />
        </Grid>
      </Box>
      <Box>
        <Grid item>
          <DataGrid columns={columns} rows={hiraganaListRow} />
        </Grid>
      </Box>
    </Grid>
  );
};

export default Day12;
