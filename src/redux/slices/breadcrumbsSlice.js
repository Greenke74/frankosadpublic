import { createSlice } from "@reduxjs/toolkit";

export const breadcrumbsSlice = createSlice({
  name: 'breadcrumbs',
  initialState: {
    breadcrumb: '',
    path: ''
  },
  reducers: {
    update: (state, { payload }) => {
			state = payload;
			return payload;
		}
  }
})