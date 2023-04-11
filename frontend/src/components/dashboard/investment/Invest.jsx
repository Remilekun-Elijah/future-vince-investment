import React from "react";
import Dashboard from "../../../pages/Dashboard";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useState } from "react";
import InvestmentPlanModal from "../../modal/InvestmentPlanModal";
import DashNavbar from "../../DashNavbar";
import { ImWhatsapp } from "react-icons/im";

const Invest = () => {
  const [modalShow, setModalShow] = useState(false);
  const [modalData, setModalData] = useState({});

  const investPlans = [
    {
      id: 2,
      title: "Silver Plan",
      roi: "21% ",
      min: "$1000",
      max: "$4999",
      days: "ROI after 6 Days",
    },
    {
      id: 3,
      title: "Diamond Plan",
      roi: "30% ",
      min: "$5000",
      max: "$9999",
      days: "ROI after 6 Days",
    },
    {
      id: 4,
      title: "Golden Plan",
      roi: "42% ",
      min: "$10000",
      max: "$10000000",
      days: "ROI after 6 Days",
    },
  ];


  return (
    <Dashboard >
      <DashNavbar />
    <div className="row relative pb-5  overflow-x-hidden w-[100%]">
      
      
      <div className=" col-sm-12 col-7  me-3 mt-1">
        <h1 className=" fw-bold  text-[var(--C_black_lite)] text-start mt-5">Invest</h1>
        <p className="mt-2 mb-5 text-[var(--C_black_lite)] text-start">
          Choose your investment plan
        </p>
        <div className=" grid grid-flow-col gap-4   ">
          {investPlans.map((investmentPlan, index) => (
            <div className="card border-0   m-2 " key={investmentPlan.id}>
              <div className="card-body text-start bg-gray-100 rounded-lg drop-shadow-md ">
                <h4 className="card-title">{investmentPlan.title}</h4>
                <h3 className="card-text">{investmentPlan.roi}</h3>
                <p className="card-text">Minimum: {investmentPlan.min}</p>
                <p className="card-text">Maximum: {investmentPlan.max}</p>
                <p className="card-text">{investmentPlan.days}</p>
                <button
                  className="btn dash-btn btn-inv text-start flex justify-between"
                  onClick={() => {
                    setModalData(investPlans[index]);
                    setModalShow(true);
                  }}
                >
                  <div className="flex justify-between"><span>Invest </span> 
                  <AiOutlineArrowRight className="mt-1" /></div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <InvestmentPlanModal
        id={modalData.id}
        title={modalData.title}
        roi={modalData.roi}
        min={modalData.min}
        max={modalData.max}
        days={modalData.days}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
    <a href="https://wa.link/y22ett" className=" text-decoration-none">
		<ImWhatsapp className="absolute right-[5%] bottom-[3%] w-[5%] h-[5%] text-gray-600"/>
		</a>
    </Dashboard>
  );
};

export default Invest;
