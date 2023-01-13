import React from "react";
import { Link } from "react-router-dom";

const RepresentativePost = ({ setIsSignedUp }) => {
  return (
    <div className="pt-5 pay-bg">
      <div className="tble_1 py-4 region-rep ">
        <h1 className="py-4">Regional Representative Post</h1>
        <p>
          Whenever you have hundred (100) Active Referrals in your downline
          ‘Both Direct or <br></br> Indirect Referrals’ you will be Among Vince
          Investment's Company Regional <br></br>adcastChannel Representative. A
          regional Representative Earns $2000 monthly salary.
        </p>
        <Link
                  className=" text-decoration-none"
                  to="/SignUp"
                  onClick={(e) => setIsSignedUp(false)}
                >
        <button className="btn btn-custom m-auto my-4">Join Us</button>
        </Link>
      </div>
      <div className="pb-5 ">
        <div className="py-5">
          <h1 className="my-4 display-4 text-light">
            Payment We <span className="title-spn">Accept</span>
          </h1>
          <p className="mb-4 text-light">
            We accept all major cryptocurrencies and fiat payment methods to
            make your <br></br> investment process easier with our platform.
          </p>
          <div className="payment-method  row d-flex justify-content-center `mx-lg-0 mx-5">
            <div className="payment-method-img col-lg-2  m-3 bg-dark ">
              <img src="./images/bitcoinlogo.jpg" alt="bitcoin" />
            </div>
            <div className="payment-method-img col-lg-2 m-3 bg-dark">
              <img src="./images/Ethereumlogo.jpg" alt="ethereum" />
            </div>
            <div className="payment-method-img col-lg-2 m-3 bg-dark">
              <img src="./images/binancelogo.jpg" alt="litecoin" />
            </div>
            <div className="payment-method-img col-lg-2 m-3 bg-dark">
              <img src="./images/blockchainlogo.jpg" alt="ripple" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepresentativePost;
