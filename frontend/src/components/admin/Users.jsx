import React from "react";
import AdminDash from "./AdminDash";
import BACKEND from "../../utils/backend";
import UsersTable from "./users.component";
import DashNavbar from "../DashNavbar";
import Dashboard from "../../pages/Dashboard";

class Users extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			users: [],
      id: ''
		};
	}
	async componentDidMount() {
		await this.requestUsers();
	}
	requestUsers() {
		new BACKEND()
			.getAllUsers()
			.then((user) => {
				if (user) {
					this.setState({ ...this.state, users: [...user.data.data.data] });
				}
			})
			.catch(console.error);
	}

	render() {

		return (
			<Dashboard >
				<DashNavbar />
			<div className="row  ">
				<div className="text-start m-auto row mt-5  w-[90%] m-auto">
					<h1 className=" text-[var(--C_black_lite)]">Users</h1>
					<table className="table table-style col-md-12  mt-5 text-[var(--C_black_lite)] ">
						<thead className="text-[var(--C_black_lite)]">
							<tr>
								<th>Name</th>
								<th>Email</th>
								<th>Last Active</th>
								<th>Status</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							{this.state?.users?.map((user, i) => {
								return <UsersTable user={user} key={user._id} that={this}/>;
							})}
						</tbody>
					</table>
				</div>
				
			</div>
			</Dashboard>
		);
	}
}

export default Users;