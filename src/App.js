import logo from './logo.svg';
import './App.css';
import Home from "./components/Home";
import { ScreenClassProvider, Row } from 'react-grid-system';

function App() {
  return (
    <ScreenClassProvider>
      <Home />
    </ScreenClassProvider>
  );
}

export default App;
