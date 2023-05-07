import { configureStore } from "@reduxjs/toolkit";
import {api} from '@/state/api'
import { setupListeners } from "@reduxjs/toolkit/query";

const store=configureStore({
    reducer:{[api.reducerPath]:api.reducer},
    middleware:(getDefault)=>getDefault().concat(api.middleware)
})
setupListeners(store.dispatch)

export default store;