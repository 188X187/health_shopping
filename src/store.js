import { configureStore } from "@reduxjs/toolkit";
import item from "./store/itemSlice";

export default configureStore({
    reducer : {
        item : item.reducer
    }
})