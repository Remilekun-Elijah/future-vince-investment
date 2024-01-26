import React from "react";
import { Link } from "react-router-dom";

const InvestmentPlans = ({ setIsSignedUp }) => {
  const investmentPlans = [
    {
      id: 1,
      title: "Silver Plan",
      roi: "21% ROI +",
      cap: "capital",
      days: "For 6 Days",
      amount: "$1000 - $4999",
    },
    {
      id: 1,
      title: "Diamond Plan",
      roi: "30% ROI +",
      cap: "capital",
      days: "For 6 Days",
      amount: "$5000 - $9999",
    },
    {
      id: 1,
      title: "Golden Plan",
      roi: "42% ROI +",
      cap: "capital",
      days: "For 6 Days",
      amount: "$10000 - $10000000",
    },
  ];

  return (
    <div className=" invest-bg text-light">
      <h1 className="pt-5 display-4 text-light">
        Investment <span className="title-spn">Plan</span>
      </h1>
      <p className="my-4">
        To make a solid investment, you have to know where you are investing.
        Find a plan <br></br> that best suits you.
      </p>
      <div className="md:flex py-5 gap-10 m-auto w-[80%]">
        {investmentPlans.map((investmentPlan) => (
          <div className="w-[95%]">
            <div className=" cdStyles  my-2 px-4">
              <div className="pt-3">
                <h3 className="title-spn mt-4">{investmentPlan.title}</h3>
              </div>
              <div className="card-body text-">
                <p>
                  {investmentPlan.roi}{" "}
                  <span className="invest-cap btn">{investmentPlan.cap}</span>
                </p>
                <hr className="title-spn mx-4"></hr>
                <p>{investmentPlan.days}</p>
                <hr className="title-spn mx-4"></hr>
                <p className="title-spn">{investmentPlan.amount}</p>
              </div>
              <Link
                  className=" text-decoration-none"
                  to="/SignUp"
                  onClick={(e) => setIsSignedUp(false)}
                >
                 <button className="btn btn-custom m-auto mb-4">Invest Now</button>
          </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InvestmentPlans;
