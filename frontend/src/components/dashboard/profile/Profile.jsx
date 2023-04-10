import React, { useState, useEffect } from "react";
import Dashboard from "../../../pages/Dashboard";
import { TbLock } from "react-icons/tb";
import { IoIosArrowForward } from "react-icons/io";
import EditPhoneModal from "../../modal/EditPhoneModal";
import DashNavbar from "../../DashNavbar";
import BACKEND from "../../../utils/backend";

const Profile = () => {
  const [modalShow, setModalShow] = useState(false);

  const [user, setUser] = React.useState({});

	useEffect(() => {
		new BACKEND()
			.isAuthenticated()
			.then((user) => {
				if (user) {
					setUser(user?.data);
					const {activities, ...rest} = user?.data
					// console.log(rest)
				}
			})
			.catch(console.error);
	}, []);

  return (
    <div className="feedback-bg-dash-2  pb-5 pt-[5%]">
      <DashNavbar />
      <Dashboard />
      <div className="col-md-9 col-sm-7 col-9 dash-text mx-sm-0  me-sm-0 pe-2  pt-[5%]">
        <div className="card rein-crd-5 mt-1">
          <div className="card-body mb-3 ms-2">
            <h5 className="text-start text-light">Personal Information</h5>
            <div className="row text-start">
              <div className="col-md-12 me-sm-0 me-4 ">
                <h6 className=" my-3 basic">BASICS</h6>
                <div className="d-flex flex-sm-row flex-column justify-content-between ">
                  <h6 className=" my-3">Username</h6>
                  <p className=" my-3">{user?.name}</p>
                  <IoIosArrowForward
                    className=" my-3 edit-profile"
                    onClick={() => setModalShow(true)}
                  />
                </div>
                <hr className="text-white"></hr>

                <div className="d-flex flex-sm-row flex-column justify-content-between">
                  <h6 className=" my-3">Email</h6>
                  <p className=" my-3">{user?.email}</p>
                  <TbLock className=" my-3" />
                </div>
                <hr className="text-white"></hr>

                <div className="d-flex flex-sm-row flex-column justify-content-between ">
                  <h6 className=" my-3">Phone</h6>
                  <p className=" my-3">{user?.number}</p>
                  <IoIosArrowForward
                    className=" my-3 edit-profile"
                    onClick={() => setModalShow(true)}
                  />
                </div>
                <h6 className=" my-3 basic">PREFERENCES</h6>

                <div className="d-flex flex-sm-row flex-column justify-content-between">
                  <h6 className=" my-3">Language</h6>
                  <p className=" my-3">English (United State)</p>
                </div>
                <hr className="text-white"></hr>

                <div className="d-flex flex-sm-row flex-column justify-content-between">
                  <h6 className=" my-3">Date Format</h6>
                  <p className=" my-3">DD/MM/YYYY</p>
                </div>
                <hr className="text-white"></hr>
              </div>
            </div>
          </div>
        </div>
      </div>
      <EditPhoneModal user={user} show={modalShow} onHide={() => setModalShow(false)} />
      {/* <EditPhoneModal show={modalShow} onHide={() => setModalShow(false)} /> */}
    </div>
  );
};

export default Profile;
