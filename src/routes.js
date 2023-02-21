import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/sections/Header/Header";
import Home from "./pages/Home";
import Imovel from "./pages/Imovel"
import Footer from "./components/sections/Footer";

export default function RoutesApp() {
    return (
        <BrowserRouter>
        <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/imovel/:id" element={<Imovel />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}