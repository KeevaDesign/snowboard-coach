import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Classes from "./pages/classes/Classes";
import Contact from "./pages/contact/Contact";
import Booking from "./pages/booking/Booking";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router basename="/snowboard-coach">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
