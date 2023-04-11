import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { FaRegClone, FaUserLock, FaUsers, FaServer } from "react-icons/fa";
import { AiOutlineLock } from "react-icons/ai";
import { BsHeadset } from "react-icons/bs";
import { FaExpeditedssl } from "react-icons/fa";
import { SiFsecure } from "react-icons/si";

const WhyChoseVice = () => {
  //create an array of objects
  const whyChoseVice = [
    {
      id: 1,
      //import image from images
      image: "../images/copy.svg",
      //import icon from react-icons
      icon: <FaRegClone />,
      title: "Legal Company",
      details:
        "Our company conducts absolutely legal activities in the legal field. We are certified to operate investment business, we are legal and safe.",
    },
    {
      id: 2,
      image: "../images/lock.svg",
      icon: <AiOutlineLock />,
      title: "High reliability",
      details:
        "We are trusted by a huge number of people. We are working hard constantly to improve the level of our security system and minimize possible risks.",
    },
    {
      id: 3,
      image: "../images/userlock.svg",
      icon: <FaUserLock />,
      title: "Anonymity",
      details:
        "Anonymity and using cryptocurrency as a payment instrument. In the era of electronic money – this is one of the most convenient ways of cooperation.",
    },
    {
      id: 4,
      image: "../images/delivery-svgrepo-com.svg",
      icon: <TbTruckDelivery />,
      title: "Quick Withdrawal",
      details:
        "Our all retreats are treated spontaneously once requested. There are high maximum limits. The minimum withdrawal amount is only $10 .",
    },
    {
      id: 5,
      image: "../images/users-alt.svg",
      icon: <FaUsers />,
      title: "Referral Program",
      details:
        "We are offering a certain level of referral income through our referral program. you can increase your income by simply refer a few people.",
    },
    {
      id: 6,
      image: "../images/headset.svg",
      icon: <BsHeadset />,
      title: "24/7 Support",
      details:
        "We provide 24/7 customer support through e-mail and telegram. Our support representatives are periodically available to elucidate any difficulty.",
    },
    {
      id: 7,
      image: "../images/server-svgrepo-com.svg",
      icon: <FaServer />,
      title: "Dedicated Server",
      details:
        "We are using a dedicated server for the website which allows us exclusive use of the resources of the entire server.",
    },
    {
      id: 8,
      image: "../images/expeditedssl-svgrepo-com.svg",
      icon: <FaExpeditedssl />,
      title: "SSL Security",
      details:
        "Comodo Essential-SSL Security encryption confirms that the presented content is genuine and legitimate.",
    },
    {
      id: 9,
      image: "../images/shield-svgrepo-com.svg",
      icon: <SiFsecure />,
      title: "DDOS Protection",
      details:
        "We are using one of the most experienced, professional, and trusted DDoS Protection and mitigation provider.",
    },
  ];

  return (
    <div className=" choice-bg">
      <h1 className=" text-light py-5 display-4">
        Why Choose <span className="title-spn">Elon Trader?</span>
      </h1>
      <p className="text-light">
        Our goal is to provide our investors with a reliable source of high
        income, while <br></br> minimizing any possible risks and offering a
        high-quality service.
      </p>
      <div className="row mt-5 pb-5 px-4">
        {whyChoseVice.map((item) => {
          return (
            <div
              className="col-lg-4 col-md-6 card crd border-0 bg-transparent text-start"
              key={item.id}
            >
              <h4 className="">
                <span className="align-center">{item.icon}</span> {item.title}
              </h4>
              <p className="text-light">{item.details}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WhyChoseVice;
