import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Box, TextField } from '@mui/material';

export const PlantEdit = () => {
    
    const [plant, assignPlant] = useState({
        species: "",
        name: "",
        lightReq: ""
});

    //hook that returns the object of key/value pair from the <Route path> in App.js
    const { plantId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:8000/plants/${plantId}`)
          .then((response) => response.json())
          .then((data) => {
            assignPlant(data)
          });
      }, [plantId]);

    const handleSaveButtonClick = (event) => {
        event.preventDefault();

        return fetch(`http://localhost:8000/plants/${plant.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify(plant)
        })
        .then(response => response.json())
        .then(() => {
            navigate("/plants")
        })
    }


return (
    
    <Box
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
  >
    <h1>Edit Details</h1>
    <div>
      <TextField
        id="standard-basic"
        label="Species"
        variant="standard"
      />
       <TextField
        id="standard-basic"
        label="Name"
        defaultValue={plant.name}
        variant="standard"
      />
       <TextField
        id="standard-basic"
        label="Light Requirement "
        variant="standard"
      />
    </div>
  </Box>
)


}

export default PlantEdit;