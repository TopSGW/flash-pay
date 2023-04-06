import './App.css';
import Landing from './pages/landing';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderC from './components/HeaderC/headerc';
import Footer from './components/Footer';
function App() {
  return (
    <BrowserRouter>
      <HeaderC/>
      <Routes>
        <Route path='/' element={<Landing/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
