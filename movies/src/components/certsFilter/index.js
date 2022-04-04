import React, {useState, useEffect}  from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { getCertifications } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../spinner'

const formControl = 
  {
    margin: 1,
    minWidth: 220,
    backgroundColor: "rgb(255, 255, 255)"
  };

  export default function CertsFilter(props) {
    const { data, error, isLoading, isError } = useQuery("certifications", getCertifications);
  
    if (isLoading) {
      return <Spinner />;
    }
  
    if (isError) {
      return <h1>{error.message}</h1>;
    }
    const certifications = data.GB;

    if (certifications[0].certification !== "All"){
      certifications.unshift({ certification: "0", name: "All" });
    }
  
    const handleChange = (e, type, value) => {
      e.preventDefault();
      props.onUserInput(type, value); // NEW
    };
  
    // const handleTextChange = (e, props) => {
    //   handleChange(e, "name", e.target.value);
    // };
  
    const handleCertificationsChange = (e) => {
      handleChange(e, "genre", e.target.value);
    };
    
  return (
    <Card 
      sx={{
        maxWidth: 345,
        backgroundColor: "rgb(204, 204, 0)"
      }} 
      variant="outlined">
      <CardContent>
        <FormControl sx={{...formControl}}>
          <InputLabel id="certifications-label">certifications</InputLabel>
          <Select
            labelId="certifications-label"
            id="certifications-select"
            defaultValue=""
            value={props.certificationsFilter}
            onChange={handleCertificationsChange}
          >
            {certifications.map((certifications) => {
              return (
                <MenuItem key={certifications.certification} value={certifications.certification}>
                  {certifications.certification}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </CardContent>
    </Card>
  );
}