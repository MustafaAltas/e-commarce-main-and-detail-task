import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./style/productsize.css"
export default function ProductSize({ size }) {
  const [selectSize, setSelectSize] = React.useState("");

  const handleChange = (event) => {
    setSelectSize(event.target.value);
  };

  return (
    <Box >
      <FormControl variant="standard" sx={{minWidth: 150}}>
      <InputLabel id="demo-simple-select-standard-label">Size</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={selectSize}
          label="Size"
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
