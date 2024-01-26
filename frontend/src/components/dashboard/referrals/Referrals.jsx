import React, { useEffect } from "react";
import Dashboard from "../../../pages/Dashboard";
import { AiOutlineInfoCircle } from "react-icons/ai";
import DashNavbar from "../../DashNavbar";
import BACKEND from "../../../utils/backend";
import { ImWhatsapp } from "react-icons/im";

const Reinvest = () => {
  const [user, setUser] = React.useState({});

	useEffect(() => {
		new BACKEND()
			.isAuthenticated()
			.then((user) => {
        console.log(user)
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
    <div className="  overflow-x-hidden">
      <div className="dash-text pt-[5%] ">
        <div className="card border-0  md:w-[90%] w-[95%] m-auto">
          <div className="card-body  bg-gray-100 text-start rounded-lg drop-shadow-md">
            <h3 className="text-start text-dark">Refer Us & Earn</h3>
            <p className="card-text text-start">
              Invite friends and earn 10% from their deposits.
            </p>
            <label className="text-start">Invite Code</label>
            <input
              type="text"
              className="form-control mb-4"
              value={user?.userName}
            ></input>
            <label className="text-start">Wallet</label>
            <input
              type="text"
              className="form-control mb-4"
              value={user?.bank?.walletId}
            ></input>
            <div className="row text-start">
              <div className="flex my-3">
              <h6 className="  mr-3">
                My Referral 
              </h6>
              <AiOutlineInfoCircle />
              </div>
              <div className="col-md-4">
                <h6 className=" ">Referee</h6>
                <hr></hr>
                <p className="text-secondary ">Tom Golden</p>
              </div>
              <div className="col-md-4">
                <h6 className="">Bonus</h6>
                <hr></hr>
                <p className="text-secondary">$68.5</p>
              </div>
              <div className="col-md-4">
                <h6 className="">Joined</h6>
                <hr></hr>
                <p className="text-secondary">09-04-2022</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <a href="https://wa.link/b3ynmh" className=" text-decoration-none">
		<ImWhatsapp className="absolute xl:right-[3px] xl:bottom-[9%] lg:right-[2%] md:right-[5%] md:bottom-[10%] right-[8%] bottom-[8%] md:w-[5%] w-[10%] md:h-[5%] h-[10%] text-gray-600"/>
		</a>
    </Dashboard>
  );
};

export default Reinvest;
