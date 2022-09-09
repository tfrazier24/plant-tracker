import { Button } from '@mui/material';
import React, { useEffect, useState, useContext } from 'react';
import "./Plant.css"

export const Plant = () => {

    const [plants, setPlants ] = useState([
        
    ]);


    const handleDelete = (id) => {
        const newPlants = plants.filter(p => p.id !== id);
        setPlants(newPlants);
    }

    //this fetch call will reach out to the JSON API and make a call requesting data
    useEffect(() => {
        fetch("http://localhost:8000/plants")
        .then(response=>response.json())
        .then(setPlants)

    }, [])


    return (
        <div className="plants">
            {plants.map((plant) => (
                <div className='plant-card' key={plant.id}>
                    <h2>{plant.name}</h2>
                    <p>{plant.name} is a {plant.species}</p>
                    <Button onClick={() => handleDelete(plant.id)}>Delete Plant</Button>
                </div>
            ))}
        </div>
      );
}
 
export default Plant;