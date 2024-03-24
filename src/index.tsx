import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { fetchOffersAction, fetchUserAction } from './store/api-actions';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

store.dispatch(fetchUserAction());
store.dispatch(fetchOffersAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <ToastContainer/>
      <App/>
    </React.StrictMode>
  </Provider>
);
