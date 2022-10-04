import React, {useEffect} from "react";
import Button from "@mui/material/Button";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from 'react';
import { useContext } from "react";
import "./App.css";
import Plant from "./components/plant/Plant";
import Home from "./components/homepage";
import Nav from "./components/nav/navbar";
import PlantForm from "./components/plant/PlantForm";
import PlantEdit from "./components/plant/PlantEdit";

function App() {
 
  return (
    <div className="app">

          <Routes>
              <Route path="/plants" element={<Plant />} />
          </Routes>
          <Routes>
            <Route path="plant_form" element={<PlantForm />} />
          </Routes>
          <Routes>
            <Route path="" element={<Home />}></Route>
          </Routes>
          <Routes>
            <Route path="/plants/:plantId/edit" element={<PlantEdit />}></Route>
          </Routes>
          <Nav />
      </div>
  );
}

export default App;

