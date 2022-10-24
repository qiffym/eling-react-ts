import React from 'react';
import ContextProvider from './context/context';
import AppRoutes from './routes/AppRoutes';
import './App.css';

const App = () => (
    <ContextProvider>
      <AppRoutes />
    </ContextProvider>
  )

export default App;
