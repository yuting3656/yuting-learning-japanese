import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Face6Icon from "@mui/icons-material/Face6";

function Day03() {
  return (
    <div style={{ fontSize: "100px" }}>
      <Container maxWidth="xxl">
        <Box sx={{ flexGrow: 1, height: "100vh", border: "solid 1px grey" }}>
          <Grid
            container
            spacing={{ mobile: 1, tablet: 2, laptop: 3 }}
            style={{ textAlign: "center" }}
          >
            <Grid xs={12}>
              {" "}
              <Face6Icon style={{ fontSize: "80px" }} />
              跟我一起學！！！
            </Grid>
            <Grid xs={4}>5</Grid>
            <Grid xs={4}>0</Grid>
            <Grid xs={4}>音</Grid>
          </Grid>
        </Box>
      </Container>
      <Button variant="contained"> 學起來</Button>
    </div>
  );
}

export default Day03;
