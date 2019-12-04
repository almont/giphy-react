import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
// import Template from './Template';
import Nav from './Nav';
import Home from './Home';

const App = () => (
    <Provider store={store}>
        <Nav />
        <Home />
    </Provider>
);

export default App;
