import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FaInstagramSquare, FaLinkedinIn, FaCopyright } from "react-icons/fa";
import { SiFacebook, SiTwitter } from "react-icons/si";


import propTypes from "prop-types";
import SignUp from "./SignUp";
import BACKEND from "../utils/backend";
import Storage from "../utils/storage";
import History from "../utils/history";
import { useNavigate } from "react-router";
import config from "../utils/config";
import { Link } from "react-router-dom";
import logo from "../images/tesla-3.svg";
import logoTwo from "../images/btc-logo.png";

const {
	pageUrls
  } = config;

const Login = ({ isSignedUp, setIsSignedUp }) => {
	const navigate = useNavigate()


const API = new BACKEND();
const model = {
  email: "",
  password: "",
  type: "User",
};
const setState = (setFormData, value) => {
  setFormData((data) => {
    return { ...data, ...value };
  });
};

const signin = async (payload) => {
// 	const mockToken = "mocktoken"; // set a mock token
//   Storage.set("token", mockToken);
//   if (payload.type.toLowerCase() === "user") {
//     window.location.href = "/dashboardtwo";
//   } else {
//     window.location.href = "/adminDash2";
//   }
	const res = await API.login(payload);
	console.log(res.data);
  if(res){
    Storage.set("token", res.data)
				if(res.data.type.toLowerCase() === 'user') window.location.href = "/user/dashboard"
    else window.location.href = "/admin/dashboard"
  }
};

  const [formData, setFormData] = useState(model);

  function addData(e) {
    let data = {},
      key = e.target.getAttribute("name");
    if (key in formData) {
      data[key] = e.target.value;
      setState(setFormData, data);
    } else throw new Error("Invalid input key name in form!");
  }

	return !isSignedUp ? (
		<div className=" backgrnd-0 ">
			<div className="">
				<div className="hero-bg  signUp-border2">
				<Link className="text-white text-decoration-none flex" to="">
             <img className="w-[30%] h-[40%]" src={logoTwo}></img>
            </Link>
					<h3 className="display-5 fw-bold text-start my-4 ms-3 me-5 text-light ">
						Welcome To <br></br>{" "}
						<span className="title-spn">Bitcoin Engine</span>
					</h3>
				</div>
				<Form
					className="signUp-border"
					onSubmit={async (e) => {
            e.preventDefault();
						await signin(formData);
					}}>
					<Form.Group className="mb-3 text-start" controlId="formBasicPassword">
						<Form.Label className="mt-4 text-light">Email Address</Form.Label>
						<Form.Control
							className="p-3 form-con text-light"
							type="email"
							name="email"
							onChange={addData}
						/>
					</Form.Group>
					<Form.Group className="mb-3 text-start" controlId="formBasicPassword">
						<Form.Label className="text-light">Password</Form.Label>
						<Form.Control
							className="p-3 form-con text-light"
							type="password"
							name="password"
							onChange={addData}
						/>
					</Form.Group>
					<Button
						className="d-flex justify-content-start  btn-custom "
						type="submit">
						Login Now
						{/* <Link className="text-decoration-none" to="/DashboardTwo">Login Now</Link> */}
					</Button>
					<p className="text-end mt-4 text-light">
						Haven't an account?{" "}
						<Link style={{textDecoration: "none"}}
							className="title-spn cursor-pointer"
							to={pageUrls.signup}>
							Sign Up
						</Link>
					</p>
				</Form>
			</div>
			<div className="flex justify-between bg m-auto rights bgBlack text-white mt-5 px-5 py-3">
        <div className='flex'>
        <FaCopyright className='mt-1 mr-2'/> 
        <span >2022</span>
        </div>
      
          <p className=""> Bitcoin Engine. All rights reserved</p>
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
		</div>
	) : (
		<SignUp isSignedUp={isSignedUp} setIsSignedUp={setIsSignedUp} />
	);
};

Login.propTypes = {
  isSignedUp: propTypes.bool,
  setIsSignedUp: propTypes.func,
};

export default Login;
