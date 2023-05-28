import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Navbar from "../components/Navbar";
import AllStatesCards from "../components/AllStatesCards";
import ParticularState from "../components/ParticularState";
import ParticularCenter from "../components/ParticularCenter";
import Footer from "../components/Footer";
import NotFound from "../components/NotFound";
import destination from "../data/allDestinations.js";
import Login from "../components/Login/Login";
import SignUp from "../components/SignUp/SignUp";
import MappingPage from "../components/MappingPage";
import LoggedInView from "../components/LoggedInView";
import FindRoute from "../components/FindRoute";
import Selection from "../components/Selection";
import SameSourceDiffDest from "../components/SameSourceDiffDest";
import DiffSourceSameDest from "../components/DiffSourceSameDest";
import DiffSourceDiffDest from "../components/DiffSourceDiffDest";

const AppRouter = ({ handleMode, darkMode }) => {
  return (
    <Router>
      <Navbar handleMode={handleMode} darkMode={darkMode} />
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route
          path="/all-states"
          element={<AllStatesCards destination={destination} />}
        />

        <Route
          path="/:state/:center"
          element={<ParticularCenter destination={destination} />}
        />

        <Route
          path="/:state"
          element={<ParticularState destination={destination} />}
        />

        <Route path="/log-in" element={<Login />} />

        <Route path="/sign-up" element={<SignUp />} />

        <Route path="/mapping-page" element={<MappingPage />} />

        <Route path="/logged-in" element={<LoggedInView />} />

        <Route path="/select-journey-type" element={<Selection />} />

        <Route path="/find-route" element={<FindRoute />} />

        <Route path="/same-source-diff-dest" element={<SameSourceDiffDest />} />

        <Route path="/diff-source-same-dest" element={<DiffSourceSameDest />} />

        <Route path="/diff-source-diff-dest" element={<DiffSourceDiffDest />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRouter;
