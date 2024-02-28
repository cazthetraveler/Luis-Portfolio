import {Outlet} from "react-router-dom";
import { useState } from "react";

import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  const [isNavVisible, setNavVisibility] = useState(false);

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  const closeNav = () => {
    setNavVisibility(false);
  };

  return (
    <>
    <Header toggleNav={toggleNav} />
    <Nav isNavVisible={isNavVisible} closeNav={closeNav} />
    <Outlet />
    <Footer />
    </>
  )
}

export default App;