import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { breadcrumbsSlice } from "./slices/breadcrumbsSlice.js";
import { mainSettingsSlice } from "./slices/mainSettingsSlice.js";

export const store = configureStore({
    reducer: combineReducers({
        mainSettings: mainSettingsSlice.reducer,
        breadcrumbs: breadcrumbsSlice.reducer
    })
})

export const actionTypes = {
    updateMainSettings: 'UPDATEMAINSETTINGS',
}