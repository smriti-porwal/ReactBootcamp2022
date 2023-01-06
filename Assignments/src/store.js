import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../src/Components/login-slice"

const store = configureStore({
    reducer: {
        login: loginReducer
    }
});

export default store;
