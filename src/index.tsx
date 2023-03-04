/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './components/App';
import {rootDocument} from './env/rootDocument';

import './index.css';

const root = ReactDOM.createRoot(rootDocument.getRoot());
root.render(<App />);
