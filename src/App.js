import './App.css';
import Calendar from './Views/Calendar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import injectContext from './Store/appContext';
import Register from './Views/Register';
import Login from './Views/Login';
import ResetPass from './Views/ResetPass';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/calendar/:date" element={<Calendar />} />
        <Route path='/register' element={<Register />} />
        <Route path='/' element={<Login />} />
        <Route path='/reset' element={<ResetPass />} />
      </Routes>
    </BrowserRouter>
  );
}


export default injectContext(App);
