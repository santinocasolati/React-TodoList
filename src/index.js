import './scss/App.scss';

import React from "react";
import ReactDOM from "react-dom/client";

import { App } from './js/App.jsx';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
    <App />
);