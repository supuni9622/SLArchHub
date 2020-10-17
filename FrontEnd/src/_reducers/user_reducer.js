import {
    LOGIN_USER,
    REGISTER_USER,
    AUTH_USER,
    LOGOUT_USER,
    GET_USER,
    UPDATE_USER,
    GET_USER_REQUEST,
    GET_USER_SUCCESS,
    GET_USER_FAIL
} from '../_actions/types';

// =============== User Reducers ==========================
export default function (state = {}, action) {
    switch (action.type) {
        case REGISTER_USER:
            return { ...state, register: action.payload }
        case LOGIN_USER:
            return { ...state, loginSucces: action.payload}
        case AUTH_USER:
            return { ...state, userData: action.payload }
        case GET_USER_REQUEST:
            return { loading: true };
        case GET_USER_SUCCESS:
            return { loading: false, userData: action.payload };
        case GET_USER_FAIL:
            return { loading: false, error: action.payload };
        case GET_USER:
            return { ...state, userData: action.payload }
        case UPDATE_USER:
            return { ...state, userData: action.payload }
        case LOGOUT_USER:
            return { ...state }
      /*  case ADD_TO_CART_USER:
            return {
                ...state, userData: {
                    ...state.userData,
                    cart: action.payload
                }
            }
        case GET_CART_ITEMS_USER:
            return {
                ...state, cartDetail: action.payload
            }
        case REMOVE_CART_ITEM_USER:
            return {
                ...state,
                cartDetail: action.payload.cartDetail,
                userData: {
                    ...state.userData,
                    cart: action.payload.cart
                }

            }
        case ON_SUCCESS_BUY_USER:
            return {
                ...state,
                userData: {
                    ...state.userData,
                    cart: action.payload.cart
                },
                cartDetail: action.payload.cartDetail
            }*/

        default:
            return state;
    }
}