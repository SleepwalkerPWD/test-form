import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'

import { formReducer } from './reducers'

export const store = configureStore({
  reducer: {
    form: formReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
})
