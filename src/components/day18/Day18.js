import { Grid } from "@mui/material";
import React from "react";

//
// IMPORT ZONE
//

function Day18() {
  return (
    <Grid
      container
      spacing={{ mobile: 1, tablet: 2, laptop: 3 }}
      style={{ textAlign: "center" }}
    >
      <Grid item xs={12}>
        <h1>永不放棄！！！</h1>
      </Grid>
      <Grid item xs={12}>
        <h1> 3 打 3</h1>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/UIXZwss7neE?si=Nmdao0O0YsYF2HuS"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </Grid>
      <Grid item xs={12}>
        <h1> 靜水輕艇</h1>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/VfpQ2yRhrMs?si=oLTvrPU7_H6qN68A"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </Grid>
      <Grid item xs={12}>
        <h1> 滑輪溜冰</h1>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/GMOBUk4P_fg?si=RA3F5umKvAjJ6B2W"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </Grid>
    </Grid>
  );
}

export default Day18;
