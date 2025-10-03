import React, { lazy, Suspense } from 'react'
import { Provider } from 'react-redux'

import { store } from './store/configurateStore'

const AuthFormLazy = lazy(() => import('./pages/Form'))

function App() {
  return (
    <>
      <Provider store={store}>
        <Suspense fallback={<div>Loading...</div>}>
          <AuthFormLazy />
        </Suspense>
      </Provider>
    </>
  )
}

export default App
