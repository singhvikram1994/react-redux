
export const UPDATE_PRODUCT = "UPDATE_PRODUCT"

export function updateProduct(newProduct) {
    return {
        type: UPDATE_PRODUCT,
        payload: {
            product:newProduct
        }
    }
    
}