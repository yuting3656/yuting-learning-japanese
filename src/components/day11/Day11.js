import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Grid } from "@mui/material";
import { katakanaList } from "../../shared/model/aiueoObj";

//
// IMPORT ZONE
//

const Day11 = () => {
  const katakanaRow = [...katakanaList].map((d, idx) =>
    Object.assign(d, { id: idx })
  );
  const katakanaColumns = [
    {
      field: "name",
      headerName: "行",
      width: 50,
    },
    {
      field: "あ",
      headerName: "あ段",
      width: 50,
    },
    {
      field: "い",
      headerName: "い段",
      width: 50,
    },
    {
      field: "う",
      headerName: "う段",
      width: 50,
    },
    {
      field: "え",
      headerName: "え段",
      width: 50,
    },
    {
      field: "お",
      headerName: "お段",
      width: 50,
    },
  ];

  console.log(katakanaRow);

  return (
    <Grid container direction={"column"} alignContent={"center"}>
      <Box>
        <DataGrid columns={katakanaColumns} rows={katakanaRow} />
      </Box>
    </Grid>
  );
};

export default Day11;
