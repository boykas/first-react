import React from 'react';

import { CssBaseline } from '@mui/material';
import ReactDOM from 'react-dom/client';

import './index.css';
import { App } from './App';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement as HTMLElement);
root.render(
  <React.StrictMode>
    <CssBaseline />
    <App />
  </React.StrictMode>
);
