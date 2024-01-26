import React, { useState, useEffect } from "react";
import Dashboard from "../../../pages/Dashboard";
import { TbLock } from "react-icons/tb";
import { IoIosArrowForward } from "react-icons/io";
import EditPhoneModal from "../../modal/EditPhoneModal";
import DashNavbar from "../../DashNavbar";
import BACKEND from "../../../utils/backend";
import { ImWhatsapp } from "react-icons/im";

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
    <Dashboard >
      <DashNavbar />
    <div className="  pb-5 ">
      
      <div className=" dash-text  pe-2  pt-[5%]">
        <div className="card border-0 mt-1">
          <div className="card-body bg-gray-900 mb-3 ms-2 rounded-lg drop-shadow-lg">
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
    <a href="https://wa.link/b3ynmh" className=" text-decoration-none">
		<ImWhatsapp className="absolute xl:right-[3px] xl:bottom-[9%] lg:right-[2%] md:right-[5%] md:bottom-[10%] right-[8%] bottom-[8%] md:w-[5%] w-[10%] md:h-[5%] h-[10%] text-gray-600"/>
		</a>
    </Dashboard>
  );
};

export default Profile;
