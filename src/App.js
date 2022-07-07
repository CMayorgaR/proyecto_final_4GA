import './App.css';
import Calendar from './Views/Calendar';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    
      <BrowserRouter>
      <Routes>
        <Route path ="/calendar" element={<Calendar />} />

      </Routes>
      </BrowserRouter>   
    

  );

}

export default App;
