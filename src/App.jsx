import React, { lazy, Suspense } from "react";
import Navbar from "./Pages/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/About/Footer";
import CustomScrollbar from "./components/CustomScrollbar";
// Import About page directly for instant loading (landing page)
import About from "./Pages/About";

// Lazy load other pages for better performance
const Staking = lazy(() => import("./Pages/Staking"));
const Waitlist = lazy(() => import("./Pages/Waitlist"));
const Profile = lazy(() => import("./Pages/Profile"));

// Enhanced loading component with skeleton
const PageLoader = () => (
  <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-950 pt-28 sm:pt-32 md:pt-36 lg:pt-40 xl:pt-44">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
      {/* Hero skeleton */}
      <div className="text-center mb-16 animate-pulse">
        <div className="h-16 bg-gray-800 rounded-lg mb-6 mx-auto max-w-4xl"></div>
        <div className="h-6 bg-gray-800 rounded mb-4 mx-auto max-w-2xl"></div>
        <div className="h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg mx-auto max-w-xs"></div>
      </div>

      {/* Content skeleton */}
      <div className="space-y-16">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="animate-pulse">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-1 space-y-4">
                <div className="h-8 bg-gray-800 rounded max-w-md"></div>
                <div className="h-4 bg-gray-800 rounded"></div>
                <div className="h-4 bg-gray-800 rounded max-w-3/4"></div>
              </div>
              <div className="w-64 h-64 bg-gray-800 rounded-xl"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-950 scroll-optimized">
        <Navbar />
        <main className="px-30">
          <Routes>
            {/* Landing page loads immediately */}
            <Route path="/" element={<About />} />
            <Route path="/about" element={<About />} />

            {/* Other pages with lazy loading and skeleton */}
            <Route
              path="/stake"
              element={
                <Suspense fallback={<PageLoader />}>
                  <Staking />
                </Suspense>
              }
            />
            <Route
              path="/waitlist"
              element={
                <Suspense fallback={<PageLoader />}>
                  <Waitlist />
                </Suspense>
              }
            />
            <Route
              path="/profile"
              element={
                <Suspense fallback={<PageLoader />}>
                  <Profile />
                </Suspense>
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
      {/* CustomScrollbar rendered outside main container for true fixed positioning */}
      <CustomScrollbar />
    </BrowserRouter>
  );
}

export default App;
