import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import React from "react";

function CustomSelect({
  label,
  options,
  name,
  setFilterVariable,
  filterValue,
  setFilterValue,
}) {
  const handleOptionChange = (optionValue) => {
    setFilterValue((prevState) => ({ ...prevState, [label]: optionValue }));

    setFilterVariable((state) => {
      const newState = { ...state };

      if (optionValue === "") {
        delete newState[label];
      } else {
        newState[label] = optionValue;
      }

      return newState;
    });
  };

  return (
    <FormControl className="custom-select" sx={{ m: 1, minWidth: 120 }}>
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <Select
        multiple={false}
        defaultValue={""}
        value={filterValue[label] ? filterValue[label] : ""}
        IconComponent={KeyboardArrowDownRoundedIcon}
        onChange={(event) => handleOptionChange(event.target.value)}
        inputProps={{ id: name, label: label }}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
export default CustomSelect;
