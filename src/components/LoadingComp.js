import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import {useSelector} from "react-redux";


export default function LoadingComp() {
    const {products_loading} = useSelector(state => state.ProductReducer);
    console.log(products_loading);


  return (
    <div>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={products_loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}
