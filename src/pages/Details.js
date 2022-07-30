import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import DetailsImages from "../components/DetailsImages";
import axios from "axios";
import { getDetails, getDetailSucces, getDetailsError } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";
import DetailInfo from "../components/DetailInfo";
import Button from "@mui/material/Button";
import { BsBackspace } from "react-icons/bs";

function Details() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { details, details_loading } = useSelector(
    (state) => state.ProductReducer
  );
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://product-mustafa-altas.herokuapp.com/data/${id}`)
      .then((res) => dispatch(getDetails(res.data)))
      .then(() => dispatch(getDetailSucces()))
      .catch((err) => getDetailsError(err.message));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (details_loading) {
    return <h3>Loading...</h3>;
  }

  return (
    <Box sx={{ width: "60%", margin: "5rem auto" }}>
      <Box sx={{display:"flex",justifyContent:"flex-start" }}>
        <Button startIcon={<BsBackspace />} onClick={() => navigate(-1)}>Back To Home</Button>
      </Box>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} sm={12} md={6}>
          <DetailsImages image={details.image} />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <DetailInfo details={details} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Details;
