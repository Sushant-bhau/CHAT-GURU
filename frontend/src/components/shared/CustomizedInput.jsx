import React from "react";
import TextField from "@mui/material/TextField";

const CustomizedInput = (props) => {
  return (
    <TextField
      margin="normal"
      variant="outlined"
      InputLabelProps={{ style: { color: "#629584" } }}
      name={props.name}
      label={props.label}
      type={props.type}
      InputProps={{
        style: { color: "#629584" },
      }}
      fullWidth
    />
  );
};

export default CustomizedInput;
