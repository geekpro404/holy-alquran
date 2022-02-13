import {
    configureStore
} from '@reduxjs/toolkit'
import {
    chapter
} from '../services/chapter'
import {
    verses
} from '../services/verses'
import languageReducer from './language'


export default configureStore({
    reducer: {
        [chapter.reducerPath]: chapter.reducer,
        [verses.reducerPath]: verses.reducer,
        language: languageReducer,

    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        }).concat([chapter.middleware, verses.middleware]),

})