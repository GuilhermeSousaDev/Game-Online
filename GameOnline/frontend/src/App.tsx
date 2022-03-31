import React from 'react';
import Router from './routes';
import { AuthProvider } from './services/Context';
import { GlobalStyle } from './style/global';

function App() {
  return (
    <AuthProvider>
      <Router />
      <GlobalStyle />
    </AuthProvider>
  );
}

export default App;