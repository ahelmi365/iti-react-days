import logo from "./logo.svg";
import "./App.css";
import { Button } from "react-bootstrap";
import UserData from "./components/UserData/UserData";
import UserFrom from "./components/UserForm/UserFrom";
import CameraLabelSwitcher from "./components/CameraLabelSwitcher/CameraLabelSwitcher";
import Welcome from "./components/Welcome/Welcome";
import NotFound from "./components/NotFound/NotFound";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import ProductDetails from "./components/ProductDetails/ProductDetails";

import { Nav } from "react-bootstrap";

import { useEffect, useState } from "react";

import { Routes, Route, Link } from "react-router-dom";
function App() {
  const [appName, setAppName] = useState();

  useEffect(() => {
    console.log("App.js useEffect: componentDidMount");
  }, []);

  useEffect(() => {
    console.log("App.js useEffect: componentDidUpdate");
  }, [appName]);

  useEffect(() => {
    return () => {
      console.log("App.js useEffect return: componentWillUnmount");
    };
  }, []);

  return (
    <div className="App">
      <h1 className="text-info">ITI React Days</h1>
      {/* <hr /> */}
      <div className="app-container">
        <div className="left">
          <Navbar />
        </div>
        <div className="right">
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/user-form" element={<UserFrom />} />
            <Route
              path="/camera-label-switcher"
              element={<CameraLabelSwitcher />}
            />
            <Route path="/products/" element={<Products />} />
            <Route path="/products/:productId" element={<ProductDetails />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
