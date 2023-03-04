/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App';
import {rootDocument} from './env/rootDocument';

const root = ReactDOM.createRoot(rootDocument.getRoot());
root.render(<App />);
