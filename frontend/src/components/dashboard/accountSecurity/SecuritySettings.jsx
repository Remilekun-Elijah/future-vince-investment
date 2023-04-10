import React from "react";
import { useState } from "react";
import Dashboard from "../../../pages/Dashboard";
import DashNavbar from "../../DashNavbar";
import ChangePasswordModal from "../../modal/ChangePasswordModal";

const SecuritySettings = () => {

  const [modalShow, setModalShow] = useState(false);

  return (
    <div className="row feedback-bg-dash min-h-screen">
      <DashNavbar />
      <Dashboard />
      <div className="col-8 ms-sm-0 ms-2 text-start">
        <p className="text-light  fw-bold draw-hd-0 ">Security Settings</p>
        <div className="card rein-crd-2">
          <div className="card-body flex justify-between mr-5">
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
  );
};

export default SecuritySettings;
