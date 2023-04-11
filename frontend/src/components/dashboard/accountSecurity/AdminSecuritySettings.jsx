import React, { useState } from "react";
import AdminDash from "../../admin/AdminDash";
import DashNavbar from "../../DashNavbar";
import ChangePasswordModal from "../../modal/ChangePasswordModal";
import Dashboard from "../../../pages/Dashboard";

const AdminSecuritySettings = () => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <Dashboard >
      <DashNavbar />
    <div className="row  ">
      <div className=" text-start">
        <h1 className="text-[var(--C_black_lite)]  text-start  my-5  ">Security Settings</h1>
        <div className="card border-0 w-[90%] m-auto">
          <div className="card-body bg-gray-100 rounded-lg drop-shadow-md row">
            <div className="col-md-8">
              <p className="card-text fw-bold text-start dash-text">
                Change Password
              </p>
              <p className="card-text text-start mb-5">
                Set a unique password to protect your account.
              </p>
            </div>
            <div className=" text-start col-md-4 text-end">
            <button className="btn dash-btn text-start mt-3" onClick={() => setModalShow(true)}>Change Password</button>
              </div>
          </div>
        </div>
      <ChangePasswordModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
    </div>
    </Dashboard>
  );
};

export default AdminSecuritySettings;
