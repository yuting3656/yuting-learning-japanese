import { Grid } from "@mui/material";
import React from "react";

//
// IMPORT ZONE
//

const Dashboard = () => {
  return (
    <Grid container justifyContent={"center"}>
      <Grid item xs={12}>
        <h1>這是 ＤＡＳＨＢＯＡＲＤ 到時候再來用！</h1>
      </Grid>
      <Grid item xs={12} style={{ height: "90vh", marginBottom: "50px" }}>
        <iframe
          width={"100%"}
          height={"100%"}
          src="https://yuting3656.github.io/yutingblog/2023-15th-ironman/day-01"
          title="day01"
        />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
