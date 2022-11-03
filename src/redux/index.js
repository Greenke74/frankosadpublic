import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { mainSettingsSlice } from "./slices/mainSettingsSlice.js";

export const store = configureStore({
    reducer: combineReducers({
        mainSettings: mainSettingsSlice.reducer
    })
})

export const actionTypes = {
    updateMainSettings: 'UPDATEMAINSETTINGS',
}