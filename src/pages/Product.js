import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductError,
  getProducts,
  getProductSucces,
} from "../redux/action";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import CardComp from "../components/CardComp";
import LoadingComp from "../components/LoadingComp";


const url = "https://product-mustafa-altas.herokuapp.com/data";

function Product() {
  const { products, products_loading, products_error_msg } = useSelector(
    (state) => state.ProductReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(url)
      .then((res) => dispatch(getProducts(res.data)))
      .then(() => dispatch(getProductSucces()))
      .catch((err) => dispatch(getProductError(err.message)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (products_loading) {
    return <LoadingComp />;
  }
  if (products_error_msg) {
    return <h1>{products_error_msg}</h1>;
  }

  return (
    <Box sx={{ width: "75%", margin: "5rem auto" }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {products.map((product) => {
          return (
            <Grid item xs={12} sm={6} md={3}>
              <CardComp key={product.id} product={product}/>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

export default Product;
