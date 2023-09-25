import { ADD_ITEM, DELETE_ITEM, INITIALIZE_ITEM } from '../actions';

const initialState = {
    items: 0,
};

const purchaseCountReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return {
                ...state,
                items: state.items + 1,
            };

        case DELETE_ITEM:
            return {
                ...state,
                items: state.items - 1,
            };
        case INITIALIZE_ITEM:
            return {
                ...state,
                items: 0
            }
        default:
            return state;
    }
};

export default purchaseCountReducer;