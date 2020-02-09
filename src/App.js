import React from 'react';
import { Provider } from 'react-redux'
import store from './store/store.js'
import Counter from './components/Counter.js'

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Counter/>
      </div>
    </Provider>
  );
}

export default App;
