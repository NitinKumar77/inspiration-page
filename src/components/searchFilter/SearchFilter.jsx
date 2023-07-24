import { Box, Button, FormControl, Select } from "@mui/material";
import React, { useState } from "react";
import { styled } from "@mui/system";
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import MenuItem from "@mui/material/MenuItem";
import "./SearchFilter.css";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import Filters from "../fitlers/Filters";
const SearchField = styled(TextField)({
  width: "300px",
  marginLeft: "50px",
});
const textstyle = {
  color: "var(--blue-b-550, #0660C8)",
  textAlign: "center",
  fontFamily: "Inter",
  fontSize: 14,
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "20px" /* 142.857% */,
};
const SearchInput = styled("input")({
  color: "black",
  // border: "none",
});
function Searchfilter({ filterVariable, setFilterVariable }) {
  const [age, setAge] = useState("Newest to Oldest");
  const [showFilter, setShowFilter] = useState(false);
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <Box
        className="search-filter-box"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <SearchField
          className="searchField-Input_icon"
          variant="standard"
          size="small"
          placeholder="Type something here..."
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color="action" />
              </InputAdornment>
            ),
            inputComponent: SearchInput,
          }}
        />
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          sx={{ margin: "0px 20px" }}
        >
          <Select
            className="searchField-Select_icon"
            IconComponent={KeyboardArrowDownRoundedIcon}
            variant="standard"
            sx={{
              backgroundColor: "#EEEEF1",
              m: 1,
            }}
            value={age}
            onChange={handleChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem className="MenuItem_text" value="Newest to Oldest">
              Newest to Oldest
            </MenuItem>
            <MenuItem className="MenuItem_text" value="Oldest to Newest">
              Oldest to Newest
            </MenuItem>
          </Select>

          <Button
            variant="outlined"
            color="primary"
            startIcon={showFilter ? <CloseIcon /> : <FilterAltIcon />}
            onClick={() => setShowFilter((state) => !state)}
            sx={{
              ...textstyle,
              padding: "10px 24px",
              marginLeft: "20px",
              textTransform: "none",
              border: "2px solid #0660C8",
              "&:hover": {
                border: "2px solid #0660C8",
              },
            }}
          >
            {showFilter ? "close" : "Filters"}
          </Button>
        </Box>
      </Box>
      {showFilter && (
        <Filters
          filterVariable={filterVariable}
          setFilterVariable={setFilterVariable}
        />
      )}
    </>
  );
}

export default Searchfilter;
