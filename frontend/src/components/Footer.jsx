import React from 'react'
import { Link } from "react-router-dom";
import { FaInstagramSquare, FaGem, FaLinkedinIn, FaCopyright, FaHouseUser, FaEnvelope, FaPhone } from 'react-icons/fa';
import { SiFacebook, SiTwitter } from 'react-icons/si';
import SimpleMap from './SimpleMap';


const Footer = () => {
  return (
    <div className=" backgrnd-0 ">
      <br></br>
      <div className="my-5 text-white">
        <h1 className="display-4">Find Us <span className="title-spn">At</span></h1>
      </div>
      <div className="my-5">
      <SimpleMap className="simMap "/>
      </div>
      <div className="row bg m-auto mt-5 pt-5 ">
        <div className="col-md-4 display-6 mb-5 img-foot logo">
        <h5 className="text-start text-white text-uppercase ms-5 mb-4 mt-5"><FaGem /> Certificate</h5>
          <img className="img-footTwo" src="./images/cert-invest.jpg" alt="#" />
        </div>
        <div className="col-md-2 text-white mb-4 mt-5">
          <h5 className="text-start text-uppercase">Our Company</h5>
          <ul className="list-unstyled text-start ">
            <li className="text-secondary text-white">Home</li>
            <li className="text-secondary text-white text-white">About</li>
            <li className="text-secondary text-white text-white">Plans</li>
            <li className="text-secondary text-white text-white">Team</li>
          </ul>
        </div>
        <div className="col-md-3 mb-4 mt-5">
          <h5 className="text-start text-uppercase text-white">Useful Links</h5>
          <ul className="list-unstyled text-start">
            <li className="text-secondary text-white">Login</li>
            <li className="text-secondary text-white">Signup</li>
            <li className="text-secondary text-white">FAQ</li>
            <li className="text-secondary text-white">whitePaper</li>
          </ul>
        </div>
        <div className="col-md-3 mb-4 mt-5">
        <h5 className="text-start text-uppercase text-white">Contact</h5>
          <ul className="list-unstyled text-start">
            <li className="text-white">
              <FaHouseUser className="mb-1" />  276 Gidlow Ln, Wigan WN6 7PG,
            </li>
            <li className="text-white">
                United Kingdom
            </li>
            <li className="text-white">
              <FaEnvelope />  admin@vinceinvestment.com
            </li>
            <li className="text-primary">
              <FaPhone />  +44 7520 606096
            </li>
          </ul>
        </div>
      </div>
      <div className="row bg m-auto rights bgBlack text-white mt-5">
        <div className="col-6 mt-4 mb-2">
          <p className=""><FaCopyright /> 2022 <span>Vince Investment.</span> All rights reserved</p>
        </div>
        <div className="col-4 mt-4 mb-2">
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
  );
};


export default Footer;


   