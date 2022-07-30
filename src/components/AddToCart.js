import React from "react";
import Button from "@mui/material/Button";

function AddToCart() {
  return (
    <div style={{display : "flex",justifyContent:"center"}}>
      <Button variant="contained" color="success" sx={{margin:"1rem"}} size = "large">
        Add To Cart
      </Button>
    </div>
  );
}

export default AddToCart;
