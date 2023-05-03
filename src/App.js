import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from "./components/header/Header";
import Menu from "./components/header/Menuu/Menu"
import Footer from "./components/footer/Footer";




function App() {
  return (
    <BrowserRouter>
        <Header />
        <Footer />
        {/*<Menu />*/}
    </BrowserRouter>
  );
}

export default App;
