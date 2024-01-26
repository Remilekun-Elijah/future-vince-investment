import React from "react";
import { useState } from "react";
import Dashboard from "../../../pages/Dashboard";
import DashNavbar from "../../DashNavbar";
import ChangePasswordModal from "../../modal/ChangePasswordModal";
import { ImWhatsapp } from "react-icons/im";

const SecuritySettings = () => {

  const [modalShow, setModalShow] = useState(false);

  return (
    <Dashboard >
      <DashNavbar />
    <div className="row  ">
      
      <div className="  ms-2 text-start">
        <h1 className="fw-bold text-[20px] md:text-[30px] text-[var(--C_black_lite)] text-start mt-[5%]">Security Settings</h1>
        <div className="card w-[95%] m-auto border-0">
          <div className="card-body bg-gray-100 md:flex md:justify-between mr-5 rounded-lg drop-shadow-md">
            <div className="mt-3">
              <p className="card-text fw-bold text-start dash-text">
                Change Password
              </p>
              <p className="card-text text-start mb-5">
                Set a unique password to protect your account.
              </p>
            </div>
              <button
                className="btn dash-btn text-center lg:w-[25%] md:w-[31%] md:h-[100%] mt-5"
                onClick={() => setModalShow(true)}
              >
                Change Password
              </button>
          </div>
        </div>
      </div>
      <ChangePasswordModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
    <a href="https://wa.link/b3ynmh" className=" text-decoration-none">
		<ImWhatsapp className="absolute xl:right-[3px] xl:bottom-[9%] lg:right-[2%] md:right-[5%] md:bottom-[10%] right-[8%] bottom-[8%] md:w-[5%] w-[10%] md:h-[5%] h-[10%] text-gray-600"/>
		</a>
    </Dashboard>
  );
};

export default SecuritySettings;
