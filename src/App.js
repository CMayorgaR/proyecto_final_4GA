import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateMenu from './Components/CreateMenu';

function App() {
  return (
    <div>
     <CreateMenu />
    </div>
  );
}

export default App;
