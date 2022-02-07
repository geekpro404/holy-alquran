import {
    configureStore
} from '@reduxjs/toolkit'
import {
    chapter
} from '../services/chapter'
import {
    verses
} from '../services/verses'


export default configureStore({
    reducer: {
        [chapter.reducerPath]: chapter.reducer,
        [verses.reducerPath]: verses.reducer,
    },
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat([chapter.middleware, verses.middleware]),
    
})