import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { MyContext, MyProvider } from './context/MyContext';
import './index.css';
import App from './App';

export { MyContext };

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <StrictMode>
    <Router>
      <MyProvider>
        <App />
      </MyProvider>
    </Router>
  </StrictMode>,
);
