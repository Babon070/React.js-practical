const initialState = {
  likeProducts: [],
};

const likeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LIKE_PRODUCTS":
      return { likeProducts: [...state.likeProducts, action.product] };
      case "REMOVE_LIKED_PRODUCT":
        let removeLikeProducts = state.likeProducts.findIndex(p => p.id === action.id)
        state.likeProducts.splice(removeLikeProducts, 1)
        return {likeProducts: [...state.likeProducts]}
    default:
      return state;
  }
};

export default likeReducer;
