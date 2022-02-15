import {
    configureStore
} from '@reduxjs/toolkit'
import {
    chapter
} from '../services/chapter'
import {
    verses
} from '../services/verses'
import {search} from '../services/search'
import languageReducer from './language'


export default configureStore({
    reducer: {
        [chapter.reducerPath]: chapter.reducer,
        [verses.reducerPath]: verses.reducer,
        [search.reducerPath]: search.reducer,
        language: languageReducer,

    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        }).concat([chapter.middleware, verses.middleware,search.middleware]),

})