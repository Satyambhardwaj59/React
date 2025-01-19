import { configureStore } from "@reduxjs/toolkit";
import  cartReduser  from './cartSlice';

const appStore = configureStore({
    reducer : {
        cart: cartReduser,
    },
});

export default appStore;