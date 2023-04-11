import React from 'react'
import { Link } from "react-router-dom";
import { FaInstagramSquare, FaGem, FaLinkedinIn, FaCopyright, FaHouseUser, FaEnvelope, FaPhone } from 'react-icons/fa';
import { SiFacebook, SiTwitter } from 'react-icons/si';
import SimpleMap from './SimpleMap';


const Footer = () => {
  return (
    <div className=" backgrnd-0 ">
      <div className="row bg m-auto  pt-5 ">
        <div className="col-md-4 display-6 mb-5 img-foot logo">
        <h5 className="text-start text-white text-uppercase ms-5 mb-4 mt-5 flex"><FaGem className='mr-3 mt-1'/> <span>Certificate</span></h5>
          <img className="img-footTwo" src="./images/cert-invest.jpg" alt="#" />
        </div>
        <div className="col-md-2 text-white mb-4 mt-5">
          <h5 className="text-start text-uppercase">Our Company</h5>
          <ul className="list-unstyled text-start ">
            <li className="text-secondary text-white">Home</li>
            {/* <li className="text-secondary text-white text-white">About</li> */}
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
            {/* <li className="text-secondary text-white">whitePaper</li> */}
          </ul>
        </div>
        <div className="col-md-3 mb-4 mt-5">
        <h5 className="text-start text-uppercase text-white">Contact</h5>
          <ul className="list-unstyled text-start">
            <li className="text-white flex mb-2">
              <FaHouseUser className="mt-1 mr-3" />  <span>1 Tesla Road Austin, TX 78725</span>
            </li>
            <li className="text-white flex mb-2">
              <FaEnvelope className="mt-1 mr-3"/>  <span>elontrade.info@gmail.com</span>
            </li>
            <li className="text-primary flex">
              <FaPhone className="mt-1 mr-3"/>  <span>+1 (972) 920-6191</span>
            </li>
          </ul>
        </div>
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
    </div>
  );
};


export default Footer;


   