import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./components/Error";
import Header from "./components/Header";
import RestaurantMenu from "./components/RestaurantMenu";
import AppLayout from "./components/AppLayout";
import About from "./components/About"
import ContactUs from "./components/ContactUs"
import Shimmer from "./components/Shimmer";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

// Lazy load the Grocery component
const LazyGrocery = lazy(() => import("./components/Grocery"));

function App() {
  return (
    <Provider store={appStore}>
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
        <Route path="/cart" element={<Cart />} />
        <Route path="/restaurants/:resId" element={<RestaurantMenu />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
