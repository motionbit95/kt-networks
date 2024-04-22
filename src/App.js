import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./styles/reset.css";

import Header from "./components/Header/Header";
import Footer from "./components/Fotter/Footer";
import styled from "styled-components";
import Service from "./pages/Service";
import Intro from "./pages/Intro";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Product from "./pages/Product";
import Payment from "./pages/Payment";
import Result from "./pages/Result";
import KSPay from "./pages/KSPay";
import KSRcv from "./pages/KSRcv";

function App() {
  return (
    <>
      {!window.location.pathname.includes("/admin") ? (
        <Appstyle>
          <Header />
          <div style={{ width: "100%" }}>
            <BrowserRouter>
              <Routes>
                <Route path="/kspay" element={<KSPay />} />
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<Intro />} />
                <Route path="/service" element={<Service />} />
                <Route path="/product" element={<Product />} />
                <Route path="/payment/*" element={<Payment />} />
                <Route path="/result/*" element={<Result />} />
              </Routes>
            </BrowserRouter>
          </div>
          <Footer />
        </Appstyle>
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/admin" element={<Admin />} />
            <Route path="/kspay_wh_rcv" element={<KSRcv />} />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;

const Appstyle = styled.div`
  width: 100%;
  height: auto;
  min-width: 350px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
`;
