import { createSlice } from "@reduxjs/toolkit";

const initiaUIState = {notification: null};

const uiSlice = createSlice({

    name: "ui",
    initialState: initiaUIState,
    reducers: {
        showNotification(state, action) {
            state.notification = {status: action.payload.status, title: action.payload.title, message: action.payload.message};
        },
    }



});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;