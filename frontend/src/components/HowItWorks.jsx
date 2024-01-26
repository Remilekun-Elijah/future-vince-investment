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
    <div className="team-bg pb-5">
      <h1 className="mt-5 py-5 text-light display-4">
        How Bitcoin <span className="title-spn">Engine Works</span>
      </h1>
      <p className="my-4 text-light">
        Get involved in our tremendous platform and Invest. We will utilize your
        money and give you profit in <br></br> your wallet automatically.
      </p>
      <div className="md:flex gap-4">
        {howItWorks.map((item) => (
          <div className="w-[80%] m-auto border-0 wcv my-5" key={item.id}>
            <div className="hIworks  bg-dark">
              <p className="hIworks-id bg-dark ">{item.id}</p>
              <img className="ml-7" src={item.img} alt={item.title} />
            </div>
            <h3 className="my-4 ">{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
