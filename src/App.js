import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import injectContext from './Store/appContext';
import Register from './Views/Register';
import Login from './Views/Login';
import ResetPass from './Views/ResetPass';
import NewMenu from './Views/NewMenu';

function App(){
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/register' element={<Register />} />
          <Route path='/' element={<Login />} />
          <Route path='/reset' element={<ResetPass />} />
          <Route path="/new_menu" element={<NewMenu />} />
        </Routes>
      </BrowserRouter>
    </div>
  )};


export default injectContext(App);
