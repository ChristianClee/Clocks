import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/style.scss'
import App from './App';
import { BrowserRouter, HashRouter } from 'react-router-dom'
import { store } from './redux/store';
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>

);

