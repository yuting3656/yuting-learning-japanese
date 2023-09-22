import { Container } from "@mui/material";
import React from "react";
import Header from "./Header";
import RouteContent from "../route/RouteContent";

//
// IMPORT ZONE
//

function MainContent() {
  return (
    <Container maxWidth="xxl">
      <Header />
      {/* ==== Main Content Is Here ==== */}
      <RouteContent />
    </Container>
  );
}

export default MainContent;
