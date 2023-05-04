import './App.css';
import Landing from './pages/landing';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderC from './components/HeaderC/headerc';
import Footer from './components/Footer';
import Step1 from './pages/transactions/step1';
import Step2 from './pages/transactions/step2';
import Step3 from './pages/transactions/step3';
import Step4 from './pages/transactions/step4';
import Result from './pages/transactions/result';
function App() {
  return (
    <div className='max-w-[1800px] mx-auto'>
      <BrowserRouter>
        <HeaderC/>
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/step1' element={<Step1/>}/>
          <Route path='/step2' element={<Step2/>}/>
          <Route path='/step3' element={<Step3/>}/>
          <Route path='/step4' element={<Step4/>}/>
          <Route path='/result' element={<Result></Result>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
