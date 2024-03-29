import './App.css';
import Calendar from './Views/Calendar';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import injectContext from './Store/appContext';
import Register from './Views/Register';
import Login from './Views/Login';
import ResetPass from './Views/ResetPass';
import CreateProfile from './Views/CreateProfile';
import NewMenu from './Views/NewMenu';
import SelectedMenu from './Views/SelectedMenu';
import Roles from './Views/Roles';
import UserCalendarSelection from './Views/UserCalendarSelection';
/* import PrivateRoute from './Components/PrivateRoute';
import SuperPrivateRoute from './Components/SuperPrivateRoute'; */
import Delivery from './Views/Delivery';
import Change from './Views/Change'
import Feedback from './Views/Feedbackk';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/newMenu/:date" element={<NewMenu />} />
        <Route path="/usercalendar" element={<UserCalendarSelection />} />
        <Route path="/userselection/:date" element={<SelectedMenu />} />
        <Route path='/reset' element={<ResetPass />} />
        <Route path='/createProfile' element={<CreateProfile />} />
        <Route path="/roles" element={<Roles />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/contrasena" element={<Change />} />
        <Route path="/evaluacion" element={<Feedback />} />
        <Route path="/calendar/:date" element={<Calendar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default injectContext(App);
