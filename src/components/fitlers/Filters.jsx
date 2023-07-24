import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import { Box, Typography } from "@mui/material";
import "./Filters.css";
import crossIcon from "../../icons/Cross.svg";
import {
  agency,
  campaignType,
  client,
  industry,
  market,
  mediaType,
  productHub,
  region,
  year,
} from "../data";
import CustomSelect from "./customSelect/CustomSelect";

export default function Filters({ setFilterVariable }) {
  const [filterValue, setFilterValue] = useState("");
  const onClickHandler = () => {
    setFilterVariable({});
    setFilterValue({});
  };
  console.log(filterValue, "*************");
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: "12px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "nowrap",
          marginBottom: "12px",
        }}
      >
        {/* First Row */}
        <CustomSelect
          className="customSelectFilterBox"
          label="Client"
          options={client}
          name="filter1"
          setFilterVariable={setFilterVariable}
          filterValue={filterValue}
          setFilterValue={setFilterValue}
        />
        <CustomSelect
          className="customSelectFilterBox"
          label="Agency"
          options={agency}
          name="filter2"
          setFilterVariable={setFilterVariable}
          filterValue={filterValue}
          setFilterValue={setFilterValue}
        />
        <CustomSelect
          className="customSelectFilterBox"
          label="Production Hub"
          options={productHub}
          name="filter3"
          setFilterVariable={setFilterVariable}
          filterValue={filterValue}
          setFilterValue={setFilterValue}
        />
        <CustomSelect
          className="customSelectFilterBox"
          label="Campaign Type"
          options={campaignType}
          name="filter4"
          filterValue={filterValue}
          setFilterVariable={setFilterVariable}
          setFilterValue={setFilterValue}
        />
        <CustomSelect
          className="customSelectFilterBox"
          label="Year"
          options={year}
          name="filter5"
          setFilterVariable={setFilterVariable}
          filterValue={filterValue}
          setFilterValue={setFilterValue}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Second Row */}
        <CustomSelect
          className="customSelectFilterBox"
          label="Industry"
          options={industry}
          name="filter6"
          setFilterVariable={setFilterVariable}
          filterValue={filterValue}
          setFilterValue={setFilterValue}
        />
        <CustomSelect
          className="customSelectFilterBox"
          label="Region"
          options={region}
          name="filter7"
          setFilterVariable={setFilterVariable}
          filterValue={filterValue}
          setFilterValue={setFilterValue}
        />
        <CustomSelect
          className="customSelectFilterBox"
          label="Market"
          options={market}
          name="filter8"
          setFilterVariable={setFilterVariable}
          filterValue={filterValue}
          setFilterValue={setFilterValue}
        />
        <CustomSelect
          className="customSelectFilterBox"
          label="Media Type"
          options={mediaType}
          name="filter9"
          setFilterVariable={setFilterVariable}
          filterValue={filterValue}
          setFilterValue={setFilterValue}
        />

        <IconButton
          aria-label="Close"
          size="small"
          sx={{
            margin: "auto 70px",
            gap: "10px",
          }}
          className="clearAllIconButton"
          onClick={onClickHandler}
        >
          <Typography className="clearAllIconButton">Clear all</Typography>
          <img src={crossIcon} alt="cross" />
        </IconButton>
      </Box>
    </Box>
  );
}
