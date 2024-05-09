"use client";

import About from "../../components/About/About";
import Authbar from "../../components/Authbar/AuthBar";
import Footer from "../../components/Footer/Footer";
import SigninForm from "../../components/SinginForm/SigninForm";
const Login = () => {
  return (
    <>
      <Authbar />
      <SigninForm />
      <About />
      <Footer />
    </>
  );
};

export default Login;
