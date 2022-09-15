import { DeleteForeverRounded } from "@mui/icons-material";
import { Button } from "@mui/material";
import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import "./Plant.css";

export const Plant = () => {
  const [plants, setPlants] = useState([]);

  //this fetch call will reach out to the JSON API and make a call requesting data
  useEffect(() => {
    fetch("http://localhost:8000/plants")
      .then((response) => response.json())
      .then(setPlants);
  }, [setPlants]);

  //Delete Button needs to be centered within it's div or container

  return (
    <div className="plants">
      <div className="header-container">
        <hl className="plant-header">Your Plants</hl>
      </div>
      {plants.map((plant) => (
        <div className="plant-card" key={plant.id}>
          <h2>{plant.name}</h2>
          <p>
            {plant.name} is a {plant.species}
          </p>
          <Button
            endIcon={<DeleteForeverRounded />}
            onClick={() => {
                fetch(`http://localhost:8000/plants/${plant.id}`, { method: "DELETE"})
            }}
          ></Button>
        </div>
      ))}
    </div>
  );
};

export default Plant;
