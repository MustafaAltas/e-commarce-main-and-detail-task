import { GET_DETAILS, GET_DETAILS_ERROR, GET_DETAILS_SUCCES, GET_PRODUCT, GET_PRODUCT_ERROR, GET_PRODUCT_SUCCES } from "./types"

export const getProducts = (payload) => {
    return{
        type: GET_PRODUCT,
        payload:payload
    }
}

export const getProductSucces = () => {
    return{
        type:GET_PRODUCT_SUCCES
    }
}

export const getProductError = (payload) => {
    return{
        type:GET_PRODUCT_ERROR,
        payload:payload
    }
};

export const getDetails = (payload) => {
    return{
        type:GET_DETAILS,
        payload:payload
    }
};

export const getDetailSucces = () => {
    return{
        type:GET_DETAILS_SUCCES
    }
}

export const getDetailsError = (payload) => {
    return{
        type:GET_DETAILS_ERROR,
        payload : payload
    }
}