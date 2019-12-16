import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Header from './header/Header';
import Main from './main/Main';

const App = () => (
    <Provider store={store}>
        <Header />
        <Main />
    </Provider>
);

export default App;
