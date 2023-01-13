import React, { useEffect } from "react";
import Dashboard from "./Dashboard";
import BACKEND from "../utils/backend";
import DashNavbar from "../components/DashNavbar";
import Storage from "../utils/storage";
import dayjs from "dayjs";

const DashboardTwo = () => {
	const [user, setUser] = React.useState({});

	useEffect(() => {
		new BACKEND()
			.isAuthenticated()
			.then((user) => {
				if (user) {
					setUser(user?.data);
					const {activities, ...rest} = user?.data
					console.log(rest)
					Storage.set("user", rest);
				}
			})
			.catch(console.error);
	}, []);

	return (
		<div className="feedback-bg-dash-2  ">
			<DashNavbar />
			<div className=" dash-text ">
				<Dashboard />
				<div className="col-md-8 hv-100">
					<h3 className="text-start text-light draw-hd-1 pt-5">
						Good day, {user?.userName || "User"}
					</h3>
					<p className="text-start text-light draw-hd-2">
						Welcome to Vince Investment
					</p>
					<div className="row">
					<div className="col-md-6 rein-crd-3">
						<div className="card mb-3">
							<div className="card-body ">
								<p className="card-text fw-bold text-start mt-2">
									Available balance
								</p>
								<h4 className="card-title text-start pt-4">
									${new Intl.NumberFormat().format(user?.bank?.balance) || 0} USD
								</h4>
							</div>
						</div>
						<div className="card mb-3">
							<div className="card-body ">
								<p className="card-text fw-bold text-start mt-2">
									Total Invested
								</p>
								<h4 className="card-title text-start pt-4">
									${new Intl.NumberFormat().format(user?.bank?.invested) || 0} USD
								</h4>
							</div>
						</div>
						<div className="card mb-5">
							<div className="card-body ">
								<p className="card-text fw-bold text-start mt-2">
									Total Profits
								</p>
								<h4 className="card-title text-start pt-4">
									${new Intl.NumberFormat().format(user?.bank?.profits) || 0} USD
								</h4>
							</div>
						</div>
					</div>
					<div className="col-md-6 rein-crd-4">
						<div className="card mb-3">
							<div className="card-body ">
								<div className="d-flex justify-content-between">
									<p className="card-text fw-bold text-start mt-2">
										Recent Activities
									</p>
									<p className="mt-2 border-2 border-primary border-bottom">
										All
									</p>
								</div>
								{user?.activities?.activities.length ? user?.activities?.activities?.map((activity, index) => {
									return (
										<>
											<hr></hr>
											<div className="text-start font-sze ">
												<span className="card-title text-start pt-3 fs-6">
													{activity.title}
												</span>
												<br></br>
												<span className="card-title text-start ">
                        {dayjs(activity.createdAt).format("DD/MM/YYYY mm:hh")}
												</span>
												<br></br>
												<span className="card-text text-start">{activity.status === 0?'Awaiting confirmation': activity.status === 1 ? 'Confirmed' : 'Declined'}</span>
											</div>
										</>
									);
								}):<p className="card-text text-start">No activities</p>}
								{/* <hr></hr> */}
								
							</div>
						</div>
					</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DashboardTwo;
