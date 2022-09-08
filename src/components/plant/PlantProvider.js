import React, { createContext, useState } from 'react';

export const PlantContext = createContext();

export const PlantProvider = () => {
    const [plants, setPlants] = useState([]);

    const getAllPlants = () => {
        fetch("http://localhost:8000/plants")
        .then(res => {
            return res.json();
        })
        .then((data) => {
            console.log(data)
            setPlants(data)
        })
    }

return (
    <PlantContext.Provider 
    value={{
        plants,
        getAllPlants
    }}

    ></PlantContext.Provider>
);
}