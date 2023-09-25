import detailReducer from './Reducers/details';
import purchaseCountReducer from './Reducers/purchaseCount';
import checkoutReducer from './Reducers/checkout';
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    detail: detailReducer,
    counter: purchaseCountReducer,
    checkout: checkoutReducer
});

export default rootReducer;