import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import About from "./components/About";
import Contactus from "./components/Contactus";
import RestaurantMenu from "./components/RestaurantMenu";

const Applayout = () => {
  return (
    <div>
      {/* <h1 className="heading">Namaste React</h1> */}
      <Header />
      <Outlet />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Applayout />}>
        <Route index element={<Body />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contactus />} />
        <Route path="restaurant/:id" element={<RestaurantMenu />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
