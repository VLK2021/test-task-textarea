import {combineReducers, configureStore} from "@reduxjs/toolkit";

import commentReducer from './slices/comment.slice';


const rootReducer = combineReducers({
    comments: commentReducer,
});


const store = configureStore({
    reducer: rootReducer,
});

export default store;