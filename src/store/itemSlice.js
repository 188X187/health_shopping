// itemSlice.js
import { createSlice } from "@reduxjs/toolkit";

let initialState = [
    {
        brand: "",
        category1: "없음",
        category2: "없음",
        category3: "없음",
        category4: "",
        hprice: 0,
        image: "/images/noexist.png",
        link: "",
        lprice: 0,
        maker: "",
        mallName: "",
        productId: 0,
        productType: 0,
        title: "없음",
        count: 1,
    },
];

let item = createSlice({
    name: "item",
    initialState,
    reducers: {
        increase(state, action) {
            state[action.payload].count++;
        },
        decrease(state, action) {
            if (state[action.payload].count > 1) {
                state[action.payload].count--;
            }
        },
        addItem(state, action) {
            state.push(action.payload);
        },
    },
});

export let { increase, decrease, addItem } = item.actions;

export default item;
