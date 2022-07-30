import { GET_PRODUCT, GET_PRODUCT_ERROR, GET_PRODUCT_SUCCES ,GET_DETAILS, GET_DETAILS_SUCCES, GET_DETAILS_ERROR} from "./types";

const initialValue = {
    products : [],
    products_loading : true,
    products_error_msg : "",
    details : {},
    details_loading : true,
    details_error_msg : ""

}

export const ProductReducer = (state=initialValue,action) => {
    switch (action.type) {
        case GET_PRODUCT_SUCCES:
            return{
                ...state,
                products_loading : false,
                products_error_msg : "",
                details:{},
                details_loading:true
            }
        case GET_PRODUCT:
            return{
                ...state,
                products : action.payload,
                products_error_msg : "",
                details:{},
                details_loading:true
            }
        case GET_PRODUCT_ERROR:
            return{
                ...state,
                products_error_msg:action.payload,
                products : [],
                products_loading : false
            }
        case GET_DETAILS:
            return{
                ...state,
                details : action.payload,
                products_error_msg : "",
                details_error_msg:""
            }
        case GET_DETAILS_SUCCES:
            return{
                ...state,
                details_loading:false,
                details_error_msg:"",
                products_error_msg : ""
            }
        case GET_DETAILS_ERROR:
            return{
                ...state,
                details_error_msg:action.payload,
                details:{},
                details_loading:false
            }
    
        default:
            return state
    }
}
