import { CHECKOUT_MEAL, PURCHASE_MEAL } from "../actions";

const initialState = {
    meal: [],
};

const checkoutReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHECKOUT_MEAL:
            return {
              ...state,
              meal: action.payload.meal,
            };

        case PURCHASE_MEAL:
            return {
              ...state,
              meal: action.payload.meal
            };
        default:
            return state;
    }
};

export default checkoutReducer;