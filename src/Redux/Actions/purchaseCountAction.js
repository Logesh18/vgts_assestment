import { ADD_ITEM, DELETE_ITEM, INITIALIZE_ITEM } from "../actions";

const addItem = () => {
    return {
        type: ADD_ITEM,
    };
};

const deleteItem = () => {
    return {
        type: DELETE_ITEM,
    };
};

const intializeItem = () => {
    return {
        type: INITIALIZE_ITEM,
    }
}

export { addItem, deleteItem, intializeItem };