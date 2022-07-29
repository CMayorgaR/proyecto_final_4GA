import './App.css';
import Calendar from './Views/Calendar';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import injectContext from './Store/appContext';
import Register from './Views/Register';
import Login from './Views/Login';
import ResetPass from './Views/ResetPass';
import CreateProfile from './Views/CreateProfile';
import NewMenu from './Views/NewMenu';
import Roles from './Views/Roles';
import PrivateRoute from './Components/PrivateRoute';
import SuperPrivateRoute from './Components/SuperPrivateRoute';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/calendar" element={<PrivateRoute><Calendar /></PrivateRoute>} />
        <Route path="/calendar/:date" element={<Calendar />} />
        <Route path='/register' element={<Register />} />
        <Route path='/' element={<Login />} />
        <Route path='/reset' element={<ResetPass />} />
        <Route path='/createProfile' element={<CreateProfile />} />
        <Route path="/newMenu" element={<SuperPrivateRoute><NewMenu /></SuperPrivateRoute>} />
        <Route path="/roles" element={<Roles />} />
      </Routes>
    </BrowserRouter>



  );
}

export default injectContext(App);
