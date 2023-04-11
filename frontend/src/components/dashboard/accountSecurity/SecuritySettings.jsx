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
        <p className="text-light  fw-bold  ">Security Settings</p>
        <div className="card w-[95%] m-auto border-0">
          <div className="card-body bg-gray-100 flex justify-between mr-5 rounded-lg drop-shadow-md">
            <div className="mt-3">
              <p className="card-text fw-bold text-start dash-text">
                Change Password
              </p>
              <p className="card-text text-start mb-5">
                Set a unique password to protect your account.
              </p>
            </div>
            <div className=" text-start mt-5 text-end">
              <button
                className="btn dash-btn text-start "
                onClick={() => setModalShow(true)}
              >
                Change Password
              </button>
            </div>
          </div>
        </div>
      </div>
      <ChangePasswordModal
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

export default SecuritySettings;
