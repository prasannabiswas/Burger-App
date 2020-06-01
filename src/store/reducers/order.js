import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../shared/utility';
 
const initialState = {
    orders: [],
    loading: false,
    purchased: false
};

const purchaseInit = (state,action) => {
    return updateObject(state,{purchased: false}); 
};

const purchaseFail = (state,action) => {
    return updateObject(state, {purchased: false});
};

const fetchOrder = (state,action) => {
    return updateObject(state,{loading: true});
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.PURCHASE_BURGER_START:
            return updateObject(state, {loading: true});
        case actionTypes.PURCHASE_BURGER_SUCCESS: 
            const newOrder ={
                ...action.orderData,
                id: action.orderId
            }
            return{
                ...state,
                loading: false,
                purchased: true,
                order: state.orders.concat(newOrder)
            };
        case actionTypes.PURCHASE_BURGER_FAIL: return purchaseFail(state,action);        
        case actionTypes.PURCHASE_INIT: return purchaseInit(state,action);            
        case actionTypes.FETCH_ORDERS_START: return fetchOrder(state,action);            
        case actionTypes.FETCH_ORDERS_SUCCESS: 
            return {
                ...state,
                orders: action.orders,
                loading: false
            };
        case actionTypes.FETCH_ORDERS_FAIL:
            return {
                ...state,
                loading: false 
            };
        default:
            return state;
    }
};

export default reducer;