import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

export default App;
