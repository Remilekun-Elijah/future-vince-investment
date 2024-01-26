import React from "react";
import { Link } from "react-router-dom";

const Hero = ({ isSignedUp, setIsSignedUp }) => {
  return (
    <div className="row ms-auto hero-bg pt-lg-5 -mt-5 -pt-5  lg:px-14 md:px-10 px-2">
      <div className="col-lg-6 text-start pt-5 ">
        <h1 className="display-1 text-light pt-5">
          Invest for the Future <br></br>{" "}
          <span className="title-spn">and Make Fast Money</span>
        </h1>
        <p className="fs-5 text-light pt-4">
          Invest in an Industry Leader, Professional, and Reliable Company. We
          provide you with the most necessary features that will make your
          experience better. Not only do we guarantee the fastest and the most
          exciting returns on your investments, we also offer you the opportunity to invest and win a Tesla car as a top investor with your Fan card. YOUR INVESTMENT IS SECURE.
        </p>
        <div className="pb-4">
          <Link
                  className="btn btn-custom mx-3 mt-4 text-decoration-none"
                  to="/SignUp"
                  onClick={(e) => setIsSignedUp(false)}
                >
                  SignUp
          </Link>
          <Link
                  className="btn btn-custom mt-4 text-decoration-none"
                  to="/Login"
                  onClick={(e) => setIsSignedUp(true)}
                >
                  LogIn
          </Link>
        </div>
      </div>
      <div className="col-lg-6"> </div>
    </div>
  );
};

export default Hero;
