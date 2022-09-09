import React from "react";
import { Button, ButtonBase, MenuItem, Select, TextField } from "@mui/material";
import { useState } from "react";
import { Box } from "@mui/system";
import { ButtonUnstyled } from "@mui/base";

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

  const handleChange = (event) => {
    setlightRequirement(event.target.value);
  };

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
        <TextField id="standard-basic" label="Name" variant="standard" />
        <TextField id="standard-basic" label="Species" variant="standard" />
        <TextField
          id="outlined-select-light-requirement"
          select
          label="Light"
          value={lightRequirement}
          onChange={handleChange}
          helperText="Please select your light requirement"
        >
          {lightRequirements.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <div>
        <Button variant="contained">Confirm</Button>
        </div>
      </div>
    </Box>
  );
};

export default PlantForm;

// const lightRequirements = [
//     {
//       value: "Bright",
//       Description: "n/a",
//     },
//     {
//       value: "Bright Indirect",
//       Description: "n/a",
//     },
//     {
//       value: "Low Light",
//       Description: "n/a",
//     },
//     {
//       value: "Medium Light",
//       Description: "n/a",
//     },
//   ];

// const [lightReq, setLightReq] = useState(lightRequirements);

// const handleChange = () => {
//     setLightReq(lightReq);
//   };

// return (

// <Box
// component="form"
// sx={{
//   '& .MuiTextField-root': { m: 1, width: '25ch' },
// }}
// noValidate
// autoComplete="off"
// >
// <div className="plant-form">

// <TextField
//       id="outlined-select-light-req"
//       select
//       label="Select"
//       value={lightReq}
//       onChange={handleChange}
//       helperText="Please select your Light Requirement"
//     >
//         {lightRequirements.map((option) => {
//             <MenuItem key={option.value} value={option.value}>
//                 {option.Description}
//             </MenuItem>
//         })}
//         </TextField>

// </div>
// </Box>
// );
