import React, { useEffect } from "react";
import Dashboard from "../../../pages/Dashboard";
import { AiOutlineInfoCircle } from "react-icons/ai";
import DashNavbar from "../../DashNavbar";
import BACKEND from "../../../utils/backend";

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
    <div className="feedback-bg-dash h-100 overflow-x-hidden">
      <DashNavbar />
      <Dashboard />
      <div className="dash-text pt-[9%] ">
        <div className="card rein-crd-1">
          <div className="card-body  ms-2 text-start">
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
                <h6 className=" ms-2">Referee</h6>
                <hr></hr>
                <p className="text-secondary ms-2">Tom Golden</p>
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
  );
};

export default Reinvest;
