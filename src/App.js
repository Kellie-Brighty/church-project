import "./App.css";
import ContactUs from "./pages/ContactUs";
import Landing from "./pages/Landing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Testimonies from "./pages/Testimonies";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <div className={`max-w-[1400px] m-auto`}>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/Contact-us" element={<ContactUs />} />
          <Route path="/Testimonies" element={<Testimonies />} />
          <Route path="/About-us" element={<AboutUs />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
