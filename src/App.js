import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./components/Error";
import Header from "./components/Header";
import RestaurantMenu from "./components/RestaurantMenu";
import AppLayout from "./components/AppLayout";
import About from "./components/About"
import ContactUs from "./components/ContactUs"
import Shimmer from "./components/Shimmer";
// Lazy load the Grocery component
const LazyGrocery = lazy(() => import("./components/Grocery"));

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<AppLayout />} />
        {/* Wrap LazyGrocery with Suspense */}
        <Route
          path="/grocery"
          element={
            <Suspense fallback={<Shimmer/>}>
              <LazyGrocery />
            </Suspense>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/restaurants/:resId" element={<RestaurantMenu />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
