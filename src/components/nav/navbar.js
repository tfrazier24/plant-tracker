import React from "react";
import { BottomNavigationAction } from '@mui/material';
import { BottomNavigation } from "@mui/material";
import { AddBoxRounded, HomeMaxRounded, LocalFloristRounded, SearchOffRounded, SearchRounded } from "@mui/icons-material";
import { useState } from "react";

export const Nav = () => {
    const [value, setValue] = useState(0);

return (
<BottomNavigation
  showLabels
  value={value}
  onChange={(event, newValue) => {
    console.log("you clicked a button");
    
    setValue(newValue);
  }}
>
  <BottomNavigationAction label="New Plant" icon={<AddBoxRounded />} />
  <BottomNavigationAction label="Search" icon={<SearchRounded />} />
  <BottomNavigationAction label="Plants" icon={<LocalFloristRounded />} />
</BottomNavigation>
)

}

export default Nav;