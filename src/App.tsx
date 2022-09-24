import React from 'react';
import ContextProvider from './context/context';
import AppRoutes from './routes/AppRoutes';
import './App.css';

function App() {
  return (
    <ContextProvider>
      <AppRoutes />
    </ContextProvider>
  );
}

export default App;
