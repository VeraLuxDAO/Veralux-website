import React, { lazy, Suspense } from "react";
import Navbar from "./Pages/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/About/Footer";

// Lazy load pages for better performance
const About = lazy(() => import("./Pages/About"));
const Staking = lazy(() => import("./Pages/Staking"));
const Waitlist = lazy(() => import("./Pages/Waitlist"));
const Profile = lazy(() => import("./Pages/Profile"));

// Loading component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-950 overflow-hidden scroll-optimized">
        <Navbar />
        <main className="px-30">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/about" element={<About />} />
              <Route path="/stake" element={<Staking />}></Route>
              <Route path="/waitlist" element={<Waitlist />}></Route>
              <Route path="/profile" element={<Profile />}></Route>
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
