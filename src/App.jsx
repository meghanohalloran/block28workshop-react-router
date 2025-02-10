import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; 

const App = () => {
  return (
    <div className="main-container">
        <div id="navbar">
          {/* Navbar Links will go here later */}
      </div>
      
      <div id="main-section">
        <Routes>
          <Route path="/blue" element={<h1>Blue</h1>} />
          <Route path="/red" element={<h1>Red</h1>} />
        </Routes>
      </div>
    </div>
  );
};

export default App;