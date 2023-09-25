import { CHECKOUT_MEAL, PURCHASE_MEAL } from "../actions";

const checkoutMeal = (data) => {
    return {
        type: CHECKOUT_MEAL,
        payload: {
            meal: data
        }
    };
};

const purchaseMeal = (data) => {
    return {
        type: PURCHASE_MEAL,
        payload: {
            meal: data
        }
    };
};

export { checkoutMeal, purchaseMeal };