import React from "react";
import { Button, ButtonBase, MenuItem, Select, TextField } from "@mui/material";
import { useState } from "react";
import { Box } from "@mui/system";
import { ButtonUnstyled } from "@mui/base";
import { useParams } from "react-router-dom";

const lightRequirements = [
  {
    value: "Bright",
    label: "Bright",
  },
  {
    value: "Bright Indirect",
    label: "Bright Indirect",
  },
  {
    value: "Low Light",
    label: "Low Light",
  },
  {
    value: "Medium Light",
    label: "Medium Light",
  },
];

export const PlantForm = () => {
  const [lightRequirement, setlightRequirement] = useState("");

  const [newPlant, setNewPlant] = useState({
    species: "",
    name: "",
    lightReq: "",
    id: 0
  });



  const handleChange = (event) => {
    setlightRequirement(event.target.value);
  };

  const savePlant = () => {
    //need to send something to the database
    fetch("http://localhost:8000/plants", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }, 
        body: JSON.stringify(newPlant)
    })
    .then(() => {
        alert("Plant added!");
    })
  }



  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <h1 className="plant-form-header">Create your new plant!</h1>
        <TextField id="standard-basic" label="Name" variant="standard"
        onChange={(event) => {
            const copyOfState = { ...newPlant };
            copyOfState.name = event.target.value;
            setNewPlant(copyOfState);
          }}
        />
        <TextField id="standard-basic" label="Species" variant="standard"
        
        onChange={(event) => {
            const copyOfState = { ...newPlant };
            copyOfState.species = event.target.value;
            setNewPlant(copyOfState);
          }}/>
        <TextField
          id="outlined-select-light-requirement"
          select
          label="Light"
          value={lightRequirement}
          onChange={(event) => {
            const copyOfState = { ...newPlant };
            copyOfState.lightReq = event.target.value;
            setNewPlant(copyOfState);
          }}
          helperText="Please select your light requirement"
        >
          {lightRequirements.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <div>
        <Button variant="contained"
         onClick={savePlant}
          
         >
            Confirm
         </Button>
        </div>
      </div>
    </Box>
  );
};

export default PlantForm;

