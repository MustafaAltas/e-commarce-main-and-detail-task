import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function ProductSize({ size }) {
  const [selectSize, setSelectSize] = React.useState("");

  const handleChange = (event) => {
    setSelectSize(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 200 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Size</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectSize}
          label="Age"
          onChange={handleChange}
        >
          {size?.map((item, index) => {
            return <MenuItem value={item} key={index}>{item}</MenuItem>;
          })}
        </Select>
      </FormControl>
    </Box>
  );
}
