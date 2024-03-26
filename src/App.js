import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./styles/reset.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import styled from "styled-components";
import Service from "./pages/Service";
import Intro from "./pages/Intro";
import Home from "./pages/Home";

function App() {
  return (
    <Appstyle>
      <Header />
      <div style={{ flex: 1, width: "100%" }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Intro />} />
            <Route path="/service" element={<Service />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </Appstyle>
  );
}

export default App;

const Appstyle = styled.div`
  width: 100%;
  height: auto;
  min-height: 100vh;
  margin-top: 90px;
  display: flex;
  flex-direction: column;
  position: relative;
`;
