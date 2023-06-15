import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Information from "../pages/Information";
import InfoDetail from "../pages/InfoDetail";
import Login from "../pages/Login";
import About from "../pages/about.jsx";
import Register from "../pages/Register";
import SearchResultList from "../pages/SearchResultList";
import Dasboard from "../pages/dashboard";
import Motivation from "../pages/motivasi";
import InfoLogin from "../pages/infoLogin";
import Event from "../pages/event";
import EventDetail from "../pages/EventDetail";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/information" element={<Information />} />
      <Route path="/infodetail/:id" element={<InfoDetail />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/about" element={<About />} />
      <Route path="/tours/search" element={<SearchResultList />} />
      <Route path="/dashboard" element={<Dasboard />} />
      <Route path="/motivasi" element={<Motivation />} />
      <Route path="/infologin" element={<InfoLogin />} />
      <Route path="/event" element={<Event />} />
      <Route path="/eventdetail/:id" element={<EventDetail />} />
    </Routes>
  );
};

export default Routers;
