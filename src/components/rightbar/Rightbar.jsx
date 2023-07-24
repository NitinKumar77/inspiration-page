import { Box } from "@mui/material";
import React, { useState } from "react";
import Banner from "../banner/Banner";
import SearchFilter from "../searchFilter/SearchFilter";
import Playlist from "../playlist/Playlist";
import Filters from "../fitlers/Filters";

function Rightbar() {
  const [showFilter, setShowFilter] = useState(false);
  const [filterVariable, setFilterVariable] = useState({});
  return (
    <Box sx={{ flex: 18 }}>
      <Banner />
      <Box sx={{ margin: "0 138px" }}>
        <SearchFilter showFilter={showFilter} setShowFilter={setShowFilter} />
        {console.log(filterVariable)}
        {showFilter && (
          <Filters
            filterVariable={filterVariable}
            setFilterVariable={setFilterVariable}
          />
        )}
        <Playlist filterVariable={filterVariable} />
      </Box>
    </Box>
  );
}

export default Rightbar;
