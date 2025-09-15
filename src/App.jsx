import React from "react";
import Navbar from "./Pages/Navbar";
import About from "./Pages/About";
import Staking from "./Pages/Staking";
import Waitlist from "./Pages/Waitlist";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./Pages/Profile";
import Footer from "./components/About/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-950 overflow-hidden">
        <Navbar />
        <main className="px-30">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/about" element={<About />} />
            <Route path="/stake" element={<Staking />}></Route>
            <Route path="/waitlist" element={<Waitlist />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
