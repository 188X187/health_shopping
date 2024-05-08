import { configureStore, combineReducers } from "@reduxjs/toolkit";
import item from "./store/itemSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

const persistConfig = {
    key: "root",
    storage,
    stateReconciler: autoMergeLevel2, // 선택 사항
};

const rootReducer = combineReducers({
    item: item.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    // 개발용 미들웨어 비활성화
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export default store;
