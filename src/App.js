import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import injectContext from './Store/appContext';
import NewMenu from './Views/NewMenu';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/new_menu" element={<NewMenu />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default injectContext(App);
