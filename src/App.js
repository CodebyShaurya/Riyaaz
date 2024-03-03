import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Pages/Home';

function App() {
  return (
    <div>
       
        

    <BrowserRouter >
      
      <Routes>
        <Route path="/" element={<Home />} />

        {/* <Route path="/Teams" element={<Team />} />  */}

      </Routes> 
    </BrowserRouter>

    </div>
  );
}

export default App;
