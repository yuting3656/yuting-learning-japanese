import { Grid } from "@mui/material";
import React from "react";

//
// IMPORT ZONE
//

const Day02 = () => {
  return (
    <Grid container justifyContent={"center"}>
      <Grid item xs={12}>
        {" "}
        <h1>Day02</h1>
      </Grid>
      <Grid item xs={12} style={{ height: "90vh", marginBottom: "50px" }}>
        <iframe
          title="day02"
          width={"100%"}
          src={
            "https://yuting3656.github.io/yutingblog/2023-15th-ironman/day-02"
          }
          height={"100%"}
        />
      </Grid>
    </Grid>
  );
};

export default Day02;
