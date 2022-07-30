import { GET_PRODUCT, GET_PRODUCT_ERROR, GET_PRODUCT_SUCCES } from "./types"

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
}