import React from 'react';
import { Provider } from 'react-redux';

import Autocomplete from './containers/Autocomplete';

import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Autocomplete />
      </div>
    </Provider>
  );
};

export default App;
