import { BrowserRouter, Routes,Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import UseRefPalyer from "./Components/UseRefPalyer";

function App() {
  return (
    <>
    <BrowserRouter>
    
    <Routes>
      <Route  path="/" element ={<Home />} />
      <Route  path="video" element ={<UseRefPalyer/>} />
    </Routes>
    </BrowserRouter>
      
      
    </>
  );
}

export default App;
