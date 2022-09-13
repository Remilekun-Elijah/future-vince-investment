import React from "react";
import person from "../images/person.svg";
import invest from "../images/pip-fill.svg";
import wallet from "../images/wallet2.svg";

const HowItWorks = () => {
  //create an array of objects
  const howItWorks = [
    {
      id: 1,
      img: person,
      title: "Create Account",
    },
    {
      id: 2,
      img: invest,
      title: "Invest To Plan",
    },
    {
      id: 3,
      img: wallet,
      title: "Get Profit",
    },
  ];
  return (
    <div className="team-bg ">
      <h1 className="mt-5 py-5 text-light display-4">
        How Future Vince <span className="title-spn">investment Works</span>
      </h1>
      <p className="my-4 text-light">
        Get involved in our tremendous platform and Invest. We will utilize your
        money and give you profit in <br></br> your wallet automatically.
      </p>
      <div className="row ">
        {howItWorks.map((item) => (
          <div className="col-4 mx-2 border-0 wcv my-5" key={item.id}>
            <div className="hIworks  bg-dark">
              <p className="hIworks-id bg-dark">{item.id}</p>
              <img src={item.img} alt={item.title} />
            </div>
            <h3 className="my-4 ">{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
