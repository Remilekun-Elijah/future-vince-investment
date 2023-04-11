import React from "react";
import { Link } from "react-router-dom";

const AboutUs = ({ isSignedUp, setIsSignedUp }) => {
  return (
    <div className="pt-5 about-bg px-2">
      <div className="row mt-4 ms-auto">
        <div className="col-lg-6 "></div>
        <div className="col-lg-6 text-start text-light ">
          <h1 className="display-5 ">
            About <span className="title-spn">Us</span>
          </h1>
          <p>
            Elon Trader is a promising company in the cryptocurrency
            market. We are looking for integrated solutions for successful
            investments in equipment and organization the process of
            cryptomining. Since 2015, the company forms the core backbone of
            bitcoin, ensuring the digital currency's integrity and successfully
            trades through exchange platforms.
          </p>
          <p>
            Our goal is to provide our investors with a reliable source of high
            income, while minimizing any possible risks and offering a
            high-quality service, allowing us to automate and simplify the
            relations between the investors and the trustees. We work towards
            increasing your profit margin by profitable investment. We look
            forward to you being part of our community.
          </p>
          <Link
                  className="btn btn-custom mt-2 text-decoration-none"
                  to="/SignUp"
                  onClick={(e) => setIsSignedUp(false)}
                >
                  SignUp
          </Link>
          <div className="my-5 mx-4">
            <iframe
              height="450"
              width="100%"
              src="https://www.youtube.com/embed/il_t1WVLNxk"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
