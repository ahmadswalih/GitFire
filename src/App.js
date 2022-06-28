import { useState } from "react";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//components
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import SignUp from "./pages/SignUp";
import NotFound from "./pages/NotFound";

//context
import { UserContext } from "./context/UserContext";

//React-Router
import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";

import firebase from "firebase/app";
import "firebase/auth";
import Footer from "./layout/Footer";
import Header from "./layout/Header";

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <ToastContainer />
      <UserContext.Provider value={{ user, setUser }}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/signin" element={<Signin />} exact />
          <Route path="/signup" element={<SignUp />} exact />
          <Route path="*" element={<NotFound />} exact />
        </Routes>
        <Footer />
      </UserContext.Provider>
    </Router>
  );
};

export default App;
