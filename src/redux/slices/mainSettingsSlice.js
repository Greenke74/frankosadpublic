import { createSlice } from "@reduxjs/toolkit";

export const mainSettingsSlice = createSlice({
	name: 'mainSettings',
	initialState: {
		siteName: '',
		geoLocation: {
			url: '',
			address: ''
		},
		contactPhone: '',
		contactMail: '',
		favicon: '',
		mediaLinks: {
			instagramUrl: '',
			facebookUrl: '',
		},
		mainPageBlocks: []
	},
	reducers: {
		update: (state, { payload }) => {
			state = payload;
			return payload;
		}
	}
})