import React from 'react';
import ReactDOM from 'react-dom';
import 'fontsource-roboto';
import App from './App';
import * as serviceWorker from './serviceWorker';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';

import { Provider } from 'react-redux'
import store from './store/store'

const render = () => {
    ReactDOM.render(
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <App />
            </ThemeProvider>,
        </Provider>,
        document.getElementById('root')
    )
}

render()

if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept('./App', render)
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
