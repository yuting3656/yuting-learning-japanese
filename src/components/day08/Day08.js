import React from "react";
import { Button, Grid } from "@mui/material";
import { menuObj } from "../../shared/model/menuObj";
import { useNavigate } from "react-router-dom";

//
// IMPORT ZONE
//

const Day08 = () => {
  const navigate = useNavigate();
  const handleOnClick = (url) => {
    navigate(url);
  };

  return (
    <Grid container direction={"column"} alignContent={"center"}>
      {Object.keys(menuObj).map((m, idx) => (
        <Grid
          xs={12}
          spacing={4}
          key={idx}
          onClick={() => handleOnClick(menuObj[m].url)}
        >
          <Button variant="outlined">
            {m} - {menuObj[m].name}
          </Button>
        </Grid>
      ))}
    </Grid>
  );
};

export default Day08;
