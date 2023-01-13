import React from "react";
import { Link } from "react-router-dom";

const InvestmentPlans = ({ setIsSignedUp }) => {
  //create an array of objects
  const investmentPlans = [
    {
      id: 1,
      title: "Bronze Plan",
      roi: "18% ROI +",
      cap: "capital",
      daly: "1% daily",
      days: "For 6 Days",
      amount: "$100 - $999",
    },
    {
      id: 1,
      title: "Silver Plan",
      roi: "18% ROI +",
      cap: "capital",
      daly: "1% daily",
      days: "For 6 Days",
      amount: "$1000 - $4999",
    },
    {
      id: 1,
      title: "Diamond Plan",
      roi: "18% ROI +",
      cap: "capital",
      daly: "1% daily",
      days: "For 6 Days",
      amount: "$5000 - $9999",
    },
    {
      id: 1,
      title: "Golden Plan",
      roi: "18% ROI +",
      cap: "capital",
      daly: "1% daily",
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
        Find a plan <br></br> which is best for you.
      </p>
      <div className="row py-5">
        {investmentPlans.map((investmentPlan) => (
          <div className="col-lg-3 col-md-6">
            <div className=" cdStyles mx-auto my-2">
              <div className="pt-3">
                <h3 className="title-spn">{investmentPlan.title}</h3>
              </div>
              <div className="card-body text-">
                <p>
                  {investmentPlan.roi}{" "}
                  <span className="invest-cap btn">{investmentPlan.cap}</span>
                </p>
                <hr className="title-spn mx-4"></hr>
                <p>{investmentPlan.daly}</p>
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
