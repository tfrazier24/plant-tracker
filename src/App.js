import React, {useEffect} from "react";
import Button from "@mui/material/Button";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from 'react';
import { useContext } from "react";
import { PlantContext } from "./components/plant/PlantProvider";
import "./App.css";
import Plant from "./components/plant/Plant";
import { PlantProvider } from "./components/plant/PlantProvider";
import Home from "./components/homepage";
import Nav from "./components/nav/navbar";

function App() {
 
  return (
    <div className="app">

          <Routes>
              <Route path="/plant" element={<Plant />} />
          </Routes>
          <Routes>
            <Route path="" element={<Home />}></Route>
          </Routes>
          <Nav />
      </div>
  );
}

export default App;

