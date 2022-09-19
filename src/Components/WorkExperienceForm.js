import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Box } from "@mui/material";

export default function WorkExperienceForm() {
  const [nameOfOrganization, setNameOfOrganization] = useState("");
  const [typeOfIndustry, setTypeOfIndustry] = useState("");
  const [position, setPosition] = useState("");
  const [employmentType, setEmploymentType] = useState("");
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());
  const [currentlyEmployed, setCurrentlyEmployed] = useState(false);
  return (
    <div className="expereience_form">
      <div className="expereience_form-row">
        <TextField
          sx={{ minWidth: 300 }}
          label="Name of Organization"
          variant="outlined"
          value={nameOfOrganization}
          onChange={(e) => {
            setNameOfOrganization(e.target.value);
          }}
        />

        <div className="expereience_form-row-content">
          <FormControl sx={{ minWidth: 300 }}>
            <InputLabel id="demo-simple-select-label">
              Type of industry
            </InputLabel>
            <Select
              label="Type of industry"
              value={typeOfIndustry}
              onChange={(e) => {
                setTypeOfIndustry(e.target.value);
              }}
            >
              <MenuItem value={"Banking"}>Banking</MenuItem>
              <MenuItem value={"IT"}>IT</MenuItem>
              <MenuItem value={"Apparel Manufacturing"}>
                Apparel Manufacturing
              </MenuItem>
              <MenuItem value={"Other"}>Other</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <div className="expereience_form-row">
        <TextField
          sx={{ minWidth: 300 }}
          label="Position"
          variant="outlined"
          value={position}
          onChange={(e) => {
            setPosition(e.target.value);
          }}
        />
        <div className="expereience_form-row-content">
          <FormControl sx={{ minWidth: 300 }}>
            <InputLabel id="demo-simple-select-label">
              Employment Type
            </InputLabel>
            <Select
              label="Employment Type"
              value={employmentType}
              onChange={(e) => {
                setEmploymentType(e.target.value);
              }}
            >
              <MenuItem value={"Permanent"}>Permanent</MenuItem>
              <MenuItem value={"Contractual"}>Contractual</MenuItem>

              <MenuItem value={"Other"}>Other</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <div className="expereience_form-row">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            views={["year", "month"]}
            label="From"
            maxDate={toDate}
            value={fromDate}
            onChange={(newValue) => {
              let tmpDate = new Date(newValue);
              let savingDate =
                tmpDate.getFullYear() + "-" + `${tmpDate.getMonth() + 1}`;

              setFromDate(savingDate);
              //   setFromDate(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
        <div className="expereience_form-row-content">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              sx={{ mx: 10 }}
              disabled={currentlyEmployed}
              views={["year", "month"]}
              label="To"
              minDate={fromDate}
              value={toDate}
              onChange={(newValue) => {
                let tmpDate = new Date(newValue);
                let savingDate =
                  tmpDate.getFullYear() + "-" + `${tmpDate.getMonth() + 1}`;

                setToDate(savingDate);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </div>
      </div>
      <div className="expereience_form-row">
        <FormControlLabel
          control={
            <Checkbox
              checked={currentlyEmployed}
              onChange={(e) => {
                let tmp = currentlyEmployed;
                if (!tmp) {
                  setToDate("");
                } else {
                  setToDate(new Date());
                }
                setCurrentlyEmployed((prev) => !prev);
              }}
            />
          }
          label="I am currently employed here"
        />
      </div>
    </div>
  );
}
