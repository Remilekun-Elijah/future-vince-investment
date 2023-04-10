import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import propTypes from 'prop-types';

import {
	FaInstagramSquare,
	FaLinkedinIn,
	FaCopyright,
} from "react-icons/fa";
import { SiFacebook, SiTwitter } from "react-icons/si";
import Login from "./Login"
import Action from '../actions/signup'

const model = {
	name: "",
	userName: "",
	email: "",
	confirmEmail: "",
	country: "",
	number: "",
	walletId: "",
	password: "",
	confirmPassword: "",
	referrer: "",
	privacyPolicy: false,
	type: "User",
};

const setState = (setFormData, value) => {
	setFormData((data) => {
		return { ...data, ...value };
	});
};



const SignUp = ({setIsSignedUp, isSignedUp}) => {
  const [error, setError] = useState({ email: "", pass: "" });
	const [formData, setFormData] = useState(model);


	useEffect(
		(e) => {
			// console.log(formData);
		},
		[formData],
	);

	function addData(e) {
		let data = {},
			key = e.target.getAttribute("name");
		if (key in formData) {
			data[key] = e.target.value;
			setState(setFormData, data);
		} else throw new Error("Invalid input key name in form!");
	}


	return (
		(!isSignedUp ? <div className=" backgrnd-0 ">
			<div className="">
				<div className="signup-head signUp-border2">
					<h3 className="display-5 fw-bold text-start my-5 ms-3 me-5 text-light ">
						Welcome To <br></br>{" "}
						<span className="title-spn">Vince Investment</span>
					</h3>
				</div>
				<Form
					className=" signUp-border "
					onSubmit={async (e) => {
						e.preventDefault();
						await Action.submit(formData, setIsSignedUp);
					}}>
					<Form.Group className="mb-3 text-start" controlId="formBasicPassword">
						<Form.Label className="mt-4 pt-5 text-light">Name</Form.Label>
						<Form.Control
							className="p-3 form-con text-light"
							type="text"
							name="name"
							onChange={addData}
						/>
					</Form.Group>
					<Form.Group className="mb-3 text-start" controlId="formBasicPassword">
						<Form.Label className="text-light">Username</Form.Label>
						<Form.Control
							className="p-3 form-con text-light"
							type="text"
							name="userName"
							onChange={addData}
						/>
					</Form.Group>
					<Form.Group className="mb-3 text-start" controlId="formBasicEmail">
						<Form.Label className="text-light">Email Address</Form.Label>
						<Form.Control
							className="p-3 form-con text-light"
							type="email"
							name="email"
							onChange={(e) => {
								addData(e);
								if (e.target.value === formData.confirmEmail)
									setError((state) => ({ ...state, email: "" }));
								else {
									let value =
										"This field must match with the Email Address field!";
									setError((state) => ({ ...state, email: value }));
								}
							}}
						/>
					</Form.Group>
					<Form.Group className="mb-3 text-start" controlId="formBasicEmail">
						<Form.Label className="text-light">
							Confirm Email Address
						</Form.Label>
						<Form.Control
							className="p-3 form-con text-light"
							type="email"
							name="confirmEmail"
							onBlur={(e) => {
								if (e.target.value !== formData.email) {
									let value =
										"This field must match with the Email Address field!";
									setError((state) => ({ ...state, email: value }));
								} else setError((state) => ({ ...state, email: "" }));
							}}
							onChange={(e) => {
								addData(e);
								setError((state) => ({ ...state, email: "" }));
							}}
						/>

						<p className="errorMsg">{error.email}</p>
					</Form.Group>
					<Form.Group className="mb-3 text-start" controlId="formBasicPassword">
						<Form.Label className="text-light">Country</Form.Label>
						<Form.Control
							className="p-3 form-con text-light"
							type="text"
							name="country"
							onChange={addData}
						/>
					</Form.Group>
					<Form.Group className="mb-3 text-start" controlId="formBasicPassword">
						<Form.Label className="text-light">Phone Number</Form.Label>
						<Form.Control
							className="p-3 form-con text-light"
							type="phone"
							name="number"
							onChange={addData}
						/>
					</Form.Group>
					<Form.Group className="mb-3 text-start" controlId="formBasicPassword">
						<Form.Label className="text-light">Bitcoin Wallet</Form.Label>
						<Form.Control
							className="p-3 form-con text-light"
							type="text"
							name="walletId"
							onChange={addData}
						/>
					</Form.Group>
					<Form.Group className="mb-3 text-start" controlId="formBasicPassword">
						<Form.Label className="text-light">Password</Form.Label>
						<Form.Control
							className="p-3 form-con text-light"
							type="password"
							name="password"
							onChange={(e) => {
								addData(e);

								if (e.target.value === formData.confirmPassword)
									setError((s) => ({ ...s, pass: "" }));
								else {
									let d = "This field must match with the Password field!";
									setError((s) => ({ ...s, pass: d }));
								}
							}}
						/>
					</Form.Group>
					<Form.Group className="mb-3 text-start" controlId="formBasicPassword">
						<Form.Label className="text-light">Confirm Password</Form.Label>
						<Form.Control
							className="p-3 form-con text-light"
							type="password"
							placeholder="Confirm Password"
							name="confirmPassword"
							onChange={(e) => {
								addData(e);
								setError((s) => ({ ...s, pass: "" }));
							}}
							onBlur={(e) => {
								if (e.target.value !== formData.password) {
									let d = "This field must match with the Password field!";
									setError((s) => ({ ...s, pass: d }));
								} else setError((s) => ({ ...s, pass: "" }));
							}}
						/>

						<p className="errorMsg">{error.pass}</p>
					</Form.Group>
					<Form.Group className="mb-3 text-start" controlId="formBasicPassword">
						<Form.Label className="text-light">
							Referral Id (Optional)
						</Form.Label>
						<Form.Control
							className="p-3 form-con text-light"
							type="text"
							name="referrer"
							onChange={addData}
						/>
					</Form.Group>
					<Form.Group
						className="mb-3 d-flex flex-row"
						controlId="formBasicCheckbox">
						<Form.Check
							className="bd-highlight "
							type="checkbox"
							name="privacyPolicy"
							onChange={addData}
						/>
						<span className="ms-2 bd-highlight text-light">
							I agree with{" "}
							<span className="title-spn">
								Privacy & Policy <span className="text-light">,</span> Terms &
								Condition
							</span>
						</span>
					</Form.Group>
					<Button
						className="d-flex justify-content-start  btn-custom "
						type="submit">
						SignUp Now
						{/* <Link className="text-decoration-none" to="/AdminDash2">SignUp Now</Link> */}
					</Button>
					
					<p className="text-start mt-4 text-light">
						Have an account?{" "}
						 <a style={{textDecoration: "none"}}
							 href="#/Login">
									Login</a>
					</p>
				</Form>
			</div>
			<div className="flex justify-between bg m-auto rights bgBlack text-white mt-5 px-5 py-3">
        <div className='flex'>
        <FaCopyright className='mt-1 mr-2'/> 
        <span >2022</span>
        </div>
      
          <p className=""> Elon Trade. All rights reserved</p>
        <div className="flex justify-between  ">
          <a href="https://facebook.com"> 
          <SiFacebook className="me-2 text-white" /> 
          </a>
          <a href="https://instagram.com">
            <FaInstagramSquare className="me-2 text-white" />
          </a>
          <a href="https://twitter.com">
            <SiTwitter className="me-2 text-white" />
          </a>
          <a href="https://linkedin.com">
          <FaLinkedinIn className="text-white" />
          </a>
        </div>
      </div>
		</div> : <Login isSignedUp={isSignedUp} setIsSignedUp={setIsSignedUp}/>) 
	);
};


SignUp.propTypes = {
  isSignedUp: propTypes.bool,
  setIsSignedUp: propTypes.func
}
export default SignUp;
