import { Button } from '@mui/material';
import React, { useEffect, useState, useContext } from 'react';
import "./Plant.css"
import { PlantContext } from './PlantProvider';

export const Plant = () => {

    const [plants, setPlants ] = useState([
        
    ]);

    const { getAllPlants } = useContext(PlantContext);

    const handleDelete = (id) => {
        const newPlants = plants.filter(p => p.id !== id);
        setPlants(newPlants);
    }

    useEffect(() => {
        getAllPlants();
        console.log(getAllPlants())
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