import React from 'react';
import ContextProvider from './context/context';
import AppRoutes from './pages/routes/AppRoutes';

function App() {
  return (
    <ContextProvider>
      <AppRoutes />
    </ContextProvider>
  );
}

export default App;
