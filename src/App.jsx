import React from 'react';
import AuthForm from './components/Page/authForm';
import { Provider } from 'react-redux';

import configurateStore from './store/configurateStore';

const { store } = configurateStore();

function App() {
  return (
    <>
      <Provider store={store} >
        <AuthForm />
      </Provider>
    </>
  );
}

export default App;
