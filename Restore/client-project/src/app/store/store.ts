import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "../../features/contact/counterReducer";
import { useDispatch, useSelector } from "react-redux";
//Legacy code
//import { configureStore, legacy_createStore } from "@reduxjs/toolkit";
//import counterReducer, { counterSlice } from "../../features/contact/counterReducer";

// export function configureTheStore() {
//     return legacy_createStore(counterReducer)
// }

export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer
    }
})

// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()