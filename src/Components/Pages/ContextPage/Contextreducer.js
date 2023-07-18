export const Contextreducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload.id),
      };
      case "UPDATE_STATE":
        return {
          ...state,
           cart: state.cart.filter(x => 
            x.id === action.payload.id ? (x.qty = action.payload.qty) : x.qty)
        }
    default:
      return state;
  }
};
