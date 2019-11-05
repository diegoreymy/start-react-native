import * as React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import Navegacion from './components/Navegacion/navegacion';
import Login from './pages/login';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f',
  },
};

const token = false;

export default function App() {
  return (
    <PaperProvider theme={theme}>
      { token ? <Navegacion /> : <Login /> }
    </PaperProvider>
  );
}