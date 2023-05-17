import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import './index.css'
import { NavBar } from './shared/nav-bar.component';
import { Provider } from 'jotai';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>,
)
