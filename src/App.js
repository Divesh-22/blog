import { Router, Routes, Switch, Route } from "react-router-dom";
import Home from "./Home.js";
import About from "./About.js";
import AddBlog from "./AddBlog.js";
import Navbar from "./Navbar.js";
function App() {
  return (
    <div>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<AddBlog />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
