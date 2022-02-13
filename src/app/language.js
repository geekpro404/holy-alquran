import {createSlice} from '@reduxjs/toolkit'
const initialState = {
    language: 'en'
}
export const language = createSlice({
    name: 'language',
    initialState,
    reducers: {
        setLanguage: (state, action) => {
            state.language = action.payload
        },
    }
})
export const {setLanguage} = language.actions
export default language.reducer