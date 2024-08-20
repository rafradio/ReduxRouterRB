import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'consolePrinter',
    initialState: {},
    reducers: {
        buttonClick: () => {console.log("Hello reducer")},
    },
});

export const { buttonClick } = counterSlice.actions

export default counterSlice.reducer