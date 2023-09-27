import { CircularProgress } from "@mui/material";
import React, { Suspense, lazy } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

//
// IMPORT ZONE
//

const Dashboard = lazy(() => import("../components/dashboard/Dashboard"));
const Day02 = lazy(() => import("../components/day02/Day02"));
const Day03 = lazy(() => import("../components/day03/Day03"));
const Day04 = lazy(() => import("../components/day04/Day04"));
const Day05 = lazy(() => import("../components/day05/Day05"));
const Day06 = lazy(() => import("../components/day06/Day06"));
const Day07 = lazy(() => import("../components/day07/Day07"));
const Day08 = lazy(() => import("../components/day08/Day08"));
const Day09 = lazy(() => import("../components/day09/Day09"));
const Day10 = lazy(() => import("../components/day10/Day10"));
const Day11 = lazy(() => import("../components/day11/Day11"));
const Day12 = lazy(() => import("../components/day12/Day12"));
const Day13 = lazy(() => import("../components/day13/Day13"));

const RouteContent = () => {
  return (
    <>
      <Suspense fallback={<CircularProgress />}>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/day02" element={<Day02 />} />
          <Route path="/day03" element={<Day03 />} />
          <Route path="/day04" element={<Day04 />} />
          <Route path="/day05" element={<Day05 />} />
          <Route path="/day06" element={<Day06 />} />
          <Route path="/day07" element={<Day07 />} />
          <Route path="/day08" element={<Day08 />} />
          <Route path="/day09" element={<Day09 />} />
          <Route path="/day10" element={<Day10 />} />
          <Route path="/day11" element={<Day11 />} />
          <Route path="/day12" element={<Day12 />} />
          <Route path="/day13" element={<Day13 />} />
          <Route path="/" element={<Navigate to="/dashboard" />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default RouteContent;
