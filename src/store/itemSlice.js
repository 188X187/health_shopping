import { createSlice } from "@reduxjs/toolkit"

let item = createSlice({
    name : 'item',
    initialState : [
    {id : 0, name : 'White and Black', count : 2},
    {id : 1, name : 'Grey Yordan', count : 1}
    ],
    reducers : {
        increase(state, action){
            state[action.payload].count += 1
        },
        decrease(state, action){
            state[action.payload].count -= 1
        },
        addItem(state, action){
            state.push(action.payload);
        }
    }
})

export let { increase, decrease, addItem } = item.actions

export default item