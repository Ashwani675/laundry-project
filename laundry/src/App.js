import logo from './logo.svg';
import './App.css';
import Homepage from './Components/HomePage/Homepage';
import { Routes , Route } from 'react-router';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import MainRouter from './MainRouter/MainRouter';
function App() {
  return (
    <MainRouter/>
  );
}

export default App;
