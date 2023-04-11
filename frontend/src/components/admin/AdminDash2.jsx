import React, { useEffect } from "react";
import AdminDash from "./AdminDash";
import BACKEND from "../../utils/backend";
import Storage from "../../utils/storage";
import Dashboard from "../../pages/Dashboard";
import DashNavbar from "../DashNavbar";
import dayjs from "dayjs";
import {FcCheckmark} from 'react-icons/fc';
import {FaTimes} from 'react-icons/fa';


class AdminDash2 extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user: {
				userName: "Admin",
				bank: {
					invested: 0,
				},
			},
			users: {},
			activities: [],
		};
	}
	async componentDidMount() {
		await this.requestUsers();
		// await this.requestUser();
		await this.getActivities();
		await this.getBalance();
	}
	
	requestUsers() {
		new BACKEND()
			.getAllUsers()
			.then((user) => {
				if (user) {
					this.setState({
						...this.state,
						users: { ...this.state.users, ...user.data.data },
					});
				}
			})
			.catch(console.error);
	}
    
	async topUpBank({activity, status}){
		try{
			const payload = activity;
			const body = {
				amount:	payload.transactionId.amount,
				profit:	payload.transactionId.profit,
				plan: payload.transactionId.plan
			}
			const user = await new BACKEND().topUpBank(body, {status, pid: payload.transactionId.user}, payload._id);
			this.setState({...this.state, user: user.data})
			if(user){
				console.log(user);
			}else{
				console.log("Error");
			}
		}catch(e){
			console.error(e);
		}
	}

	// requestUser() {
	// 	new BACKEND()
	// 		.isAuthenticated()
	// 		.then((user) => {
	// 			if (user) {
	// 				Storage.set("user", user?.data);
	// 				this.setState({ ...this.state, user: user.data });
	// 			}
	// 		})
	// 		.catch((e) => {
	// 			const user = Storage.get("user");
	// 			this.setState({ ...this.state, user });
	// 			console.error("Using storages data", e);
	// 		});
	// }
	

	async getActivities() {
		try{
			const users = await new BACKEND().getActivities();
			const activities = []
			users.data.map(activity => {
				return activity.activities.map(act => activities.push({...act, userName: activity.user.userName}))
			})
			this.setState({...this.state, activities: activities})
			console.log(this.state.activities);	
		}catch(e){
		}
		
	}

	async getBalance() {
		try{
			const bank = await new BACKEND().getBalance();
			this.setState({...this.state, user: {...this.state.user, bank: {invested: bank.data}}})
		}catch(e){
		}
	}
	
	
	render() {
		return (
			<Dashboard >
				<DashNavbar />
			<div className="  pb-[5%]">
				
				
				<div className=" w-[100%]    ">
					<h1 className="text-[var(--C_black_lite)]  text-start  mt-5">
						Good day, {this.state?.user?.userName}
					</h1>
					<p className="text-[var(--C_black_lite)] text-start ">
						Welcome to your admin dashboard.
					</p>
					<div className="flex justify-between w-[90%] m-auto">
						<div className="card border-0 mt-5 w-[100%]">
							<div className="card-body bg-gray-100 rounded-lg drop-shadow-md">
								<p className="card-text fw-bold text-start mt-2">Total Users</p>
								<h4 className="card-title text-start pt-4">
									{new Intl.NumberFormat().format(this.state?.users?.pageCount || 0 )}
								</h4>
							</div>
						</div>
						<div className="card border-0 ms-5 mt-5 w-[100%]">
							<div className="card-body bg-gray-100 rounded-lg drop-shadow-md">
								<p className="card-text fw-bold text-start mt-2">
									Total Investments
								</p>
								<h4 className="card-title text-start pt-4">
									$ {new Intl.NumberFormat().format(this.state?.user?.bank?.invested || 0) } USD
								</h4>
							</div>
						</div>
					</div>
					<div className="card border-0 mb-5 w-[90%] m-auto mt-5">
							<div className="card-body bg-gray-100 rounded-lg drop-shadow-md">
								<div className="d-flex justify-content-between">
									<p className="card-text fw-bold text-start mt-2">
										Users Recent Activities
									</p>
									<p className="mt-2 border-primary border-bottom">
										All
									</p>
								</div>
								{this.state.activities.length?this.state.activities.sort((a,b) => a?.status > b?.status ? 1 : -1).map((activity, index) => {
									return (
										<div key={index}>
											<hr></hr>
											<div className="text-start font-sze">
												<span className="card-title text-start pt-3 fs-6">
													{activity.title +' by '+	activity.userName}
												</span>
												<br></br>
												<span className="card-title text-start ">
                        {dayjs(activity.createdAt).format("DD/MM/YYYY mm:hh")}
												</span>
												<br></br>
												<span className="card-text text-start">{activity.status === 0?'Awaiting confirmation': activity.status === 1 ? 'Confirmed' : 'Declined'}</span>

												{activity.status === 0 && 
													<div className="flex">
														<FcCheckmark size={'25'} className='text-bold' style={{cursor: 'pointer'}} onClick={async _=> await new AdminDash2().topUpBank({activity,status:1})}/>
													<FaTimes size={'20'} style={{marginLeft: '10px', color: '#FF2414', cursor: 'pointer'}}
													onClick={async _=> await new AdminDash2().topUpBank({activity,status:2})}/>
													</div> 
												}
											</div>
										</div>
									);
								}):<p className="card-text text-start">No activities</p>}
							</div>
						</div>
				</div>
			</div>
			</Dashboard>
		);
	}
}

export default AdminDash2;
