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

//firebase
import firebase from "firebase/compat/app";
import "firebase/auth";
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

//layout components
import Footer from "./layout/Footer";
import Header from "./layout/Header";

import FirebaseConfig from "./config/FirebaseConfig";
//init firebas`e
const application = initializeApp(FirebaseConfig);
const App = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth();
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
