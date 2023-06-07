import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import Header from "./components/header/Header";
import Menu from "./components/header/Menuu/Menu"
import Footer from "./components/footer/Footer";
import "./components/text.css"
import HerroBanner from "./components/heroBanner/HerroBanner";
import Homepage from "./pages/homepage";
import Carousel, {CarouselItem} from "./components/сarousel/carousel";
import React, {useState} from "react";
import { DatePicker } from 'antd';
import ShoppingCart, {Basket} from "./pages/shoppingCart/ShoppingCart";
import CartPage from "./pages/shoppingCart/CartPage";
import ItemPage from "./pages/itemPage/ItemPage";
import NewsLetter from "./pages/homepage/newsLetter/NewsLetter";
import {exploreProducts2} from "./constants";
import FAQ from "./pages/FAQ/FAQ";
import Checkout from "./pages/Checkout/Checkout";
import {helpIcon} from "./img/index";

import ExploreCareers from "./pages/Careers/ExploreCareers";




function App() {
    const [myObject, setMyObject] = useState(false);
    const [cartItems, setCartItems] = useState(() => JSON.parse(localStorage.getItem("cartItems")) || []);
    
    
    
    
    
    
    return (
    
    <BrowserRouter>
        <Header />
        <Link to="FAQ"><img src={helpIcon} className="helpIcon"/></Link>
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/card" element={<CartPage />} />
            <Route path="/testSection" element={<ItemPage />} />
            <Route path="/FAQ" element={<FAQ />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/careers" element={<ExploreCareers />} />
        </Routes>


        <Footer />
    </BrowserRouter>
  );
}

export default App;
