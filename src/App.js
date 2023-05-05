import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from "./components/header/Header";
import Menu from "./components/header/Menuu/Menu"
import Footer from "./components/footer/Footer";
import "./components/text.css"
import HerroBanner from "./components/heroBanner/HerroBanner";
import Homepage from "./pages/homepage";
import Carousel, {CarouselItem} from "./components/сarousel/carousel";
import React from "react";
import { DatePicker } from 'antd';


function App() {
  return (
    <BrowserRouter>
        <Header />
        <Homepage />
        <Footer />
    </BrowserRouter>
  );
}

export default App;
