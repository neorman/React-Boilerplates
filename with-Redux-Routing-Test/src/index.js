import React from 'react'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './store'
import App from './pages/app'
import registerServiceWorker from './registerServiceWorker'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './index.css'

injectTapEventPlugin();

ReactDOM.render(
    <MuiThemeProvider>
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <div>
              <App />
            </div>
          </ConnectedRouter>
        </Provider>
    </MuiThemeProvider>
    ,
    document.getElementById('root')
);

registerServiceWorker();
