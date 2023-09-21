import { Grid } from "@mui/material";
import React from "react";

//
// IMPORT ZONE
//

const Day07 = () => {
  const aiueolist = [
    { name: "あ", roots: "a", words: ["あ", "い", "う", "え", "お", ""] },
    { name: "か", roots: "k", words: ["か", "き", "く", "け", "こ", ""] },
    { name: "さ", roots: "s", words: ["さ", "し", "す", "せ", "そ", ""] },
    { name: "た", roots: "t", words: ["た", "ち", "つ", "て", "と", ""] },
    { name: "な", roots: "n", words: ["な", "に", "ぬ", "ね", "の", ""] },
    { name: "は", roots: "h", words: ["は", "ひ", "ふ", "へ", "ほ", ""] },
    { name: "ま", roots: "m", words: ["ま", "み", "む", "め", "も", ""] },
    { name: "や", roots: "y", words: ["や", "", "ゆ", "", "よ", ""] },
    { name: "ら", roots: "r", words: ["ら", "り", "る", "れ", "ろ", ""] },
    { name: "わ", roots: "w", words: ["わ", "", "", "", "を", ""] },
    { name: "ん", roots: "n", words: ["", "", "", "", "", "ん"] },
  ];

  return (
    <Grid
      container
      spacing={{ mobile: 1, tablet: 2, laptop: 3 }}
      style={{ textAlign: "center" }}
    >
      <Grid item xs={12}>
        <h1>Day 07 a i u e o</h1>
      </Grid>
      {aiueolist.map((d) => (
        <Grid container direction="row" justifyContent="center">
          <Grid item xs={1}>
            ({d.roots})
          </Grid>
          <Grid item xs={1}>
            {d.name} 行
          </Grid>
          {d.words.map((w) => (
            <Grid item xs={1}>
              {w}
            </Grid>
          ))}
        </Grid>
      ))}
    </Grid>
  );
};

export default Day07;
