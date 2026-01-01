
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@app/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@assets/styles/global.css';
import '@assets/styles/layout.css';
import '@assets/styles/components.css';
import '@assets/styles/pages.css';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
