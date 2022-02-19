// for add item to cart 
export const addCart = (product) => {
    return {
        type: "ADDITEM",
        payload: product

    }
}
// for delete item 
export const deleteCart = (product) => {
    return {
        type: "DELETEITEM",
        payload: product
    }
}