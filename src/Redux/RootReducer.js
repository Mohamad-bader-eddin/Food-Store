import { combineReducers } from "redux";
import { userReduser } from './User/userReducer'
import { menuReducer } from './Menu/menuReducer'
import { cartReducer } from "./Cart/CartReducer";
import { couponReducer } from "./Coupon/couponReducer";
import { summaryReducer } from "./Summary/summaryReducer";

const RootReducer = combineReducers({
    user: userReduser,
    menu: menuReducer,
    cart: cartReducer,
    coupon: couponReducer,
    summary: summaryReducer
})

export default RootReducer