import { GET_PRODUCT, GET_PRODUCT_ERROR, GET_PRODUCT_SUCCES } from "./types";

const initialValue = {
    products : [],
    products_loading : true,
    products_error_msg : "",

}

export const ProductReducer = (state=initialValue,action) => {
    switch (action.type) {
        case GET_PRODUCT_SUCCES:
            return{
                ...state,
                products_loading : false,
                products_error_msg : ""
            }
        case GET_PRODUCT:
            return{
                ...state,
                products : action.payload,
                products_error_msg : ""
            }
        case GET_PRODUCT_ERROR:
            return{
                ...state,
                products_error_msg:action.payload,
                products : [],
                products_loading : false
            }
    
        default:
            return state
    }
}
