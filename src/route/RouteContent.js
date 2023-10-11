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
const Day14 = lazy(() => import("../components/day14/Day14"));
const Day15 = lazy(() => import("../components/day15/Day15"));
const Day16 = lazy(() => import("../components/day16/Day16"));
const Day17 = lazy(() => import("../components/day17/Day17"));
const Day18 = lazy(() => import("../components/day18/Day18"));
const Day19 = lazy(() => import("../components/day19/Day19"));
const Day20 = lazy(() => import("../components/day20/Day20"));
const Day21 = lazy(() => import("../components/day21/Day21"));
const Day222324 = lazy(() => import("../components/day22_2324/Day222324"));
const Day26 = lazy(() => import("../components/day26/Day26"));
const Day27 = lazy(() => import("../components/day27/Day27"));

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
          <Route path="/day14" element={<Day14 />} />
          <Route path="/day15" element={<Day15 />} />
          <Route path="/day16" element={<Day16 />} />
          <Route path="/day17" element={<Day17 />} />
          <Route path="/day18" element={<Day18 />} />
          <Route path="/day19" element={<Day19 />} />
          <Route path="/day20" element={<Day20 />} />
          <Route path="/day21" element={<Day21 />} />
          <Route path="/day222324" element={<Day222324 />} />
          <Route path="/day26" element={<Day26 />} />
          <Route path="/day27" element={<Day27 />} />
          <Route path="/" element={<Navigate to="/dashboard" />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default RouteContent;
