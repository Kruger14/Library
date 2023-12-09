import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Add from './pages/Add';
import Update from './pages/Update';
import Books from './pages/Books';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Books/>}/>
        <Route path='/add' element={<Add/>} />
        <Route path='/Update/:id' element={<Update />} />
      </Routes>
  </BrowserRouter>  
  );
}

export default App;