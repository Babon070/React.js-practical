const initialState = {
    basketProducts: []
}


const addToBasket = (state = initialState, action) => {
    switch(action.type){
        case "ADD_TO_BASKET":
            return {basketProducts: [...state.basketProducts, action.product]};

            case "REMOVE_BASKET_PRODUCTS":
                let removedProductsIndex = state.basketProducts.findIndex(p => p?.id === action?.id);
                state.basketProducts.splice(removedProductsIndex, 1);
                return{
                    basketProducts: [...state.basketProducts]
                }
            default: return state
    }
}

export default addToBasket