import About from "./components/About";
import AppLayout from "./components/AppLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import Header from "./components/Header";
import RestaurantMenu from "./components/RestaurantMenu";
function App() {
  return (
   <BrowserRouter>
   <Header />
    <Routes>
    <Route path="/" element={<AppLayout />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact-us" element={<ContactUs />} />
    <Route path="/restaurants/:resId" element={<RestaurantMenu />} />
    <Route path="*" element={<Error />} />
    </Routes>
   </BrowserRouter>
  );
}


export default App;
