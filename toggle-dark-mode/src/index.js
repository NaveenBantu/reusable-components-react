import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import Background from './components/Background';
import { ThemeProvider } from './components/ThemeContext';
import ThemeToggle from './components/ThemeToggle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <Background>
        <div className='absolute right-0 top-0 mr-4 mt-4 md:mr-6 md:mt-6'>
          <ThemeToggle />
        </div>
        {/* <App className='h-full' /> */}
      </Background>
    </ThemeProvider>
  </React.StrictMode>
);
