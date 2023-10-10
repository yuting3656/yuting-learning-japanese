import { Grid } from "@mui/material";
import React from "react";
import WordsSpinningWheel from "./WordsSpinningWheel";

//
// IMPORT ZONE
//

function Day25() {
  return (
    <Grid
      container
      spacing={{ mobile: 1, tablet: 2, laptop: 3 }}
      style={{ textAlign: "center" }}
    >
      <Grid item xs={12}>
        <WordsSpinningWheel />
      </Grid>
    </Grid>
  );
}

export default Day25;
