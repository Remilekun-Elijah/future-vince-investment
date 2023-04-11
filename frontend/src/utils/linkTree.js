import React from "react";
import * as FiIcons from 'react-icons/fi'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as BiIcons from 'react-icons/bi'
import * as MdIcons from 'react-icons/md'
import * as RiIcons from 'react-icons/ri'
import * as BsIcons from 'react-icons/bs'
import config from "./config";
import {
  Roles
} from "./helper";

const {
  SuperAdmin,
  User
} = Roles;

const {
  pageUrls
} = config;

const links = [
  {
    authorizedUsers: [User],
    name: "Dashboard",
    url: pageUrls.dashboard,
    icon: <MdIcons.MdOutlineDashboard  size = {
      "24px"
    }
    className = "mx-3" / > ,
    xtra: {
      icon: "",
    }
  },
  {
    authorizedUsers: [SuperAdmin],
    name: "Dashboard",
    url: pageUrls.adminDashTwo,
    icon: <MdIcons.MdOutlineDashboard  size = {
      "24px"
    }
    className = "mx-3" / > ,
    xtra: {
      icon: "",
    }
  },
  {
    authorizedUsers: [User],
    name: 'Invest',
    url: pageUrls.invest,
    icon: < RiIcons.RiExchangeDollarLine size = {
      "24px"
    }
    className = "mx-3" / > ,
  },
  {
    authorizedUsers: [SuperAdmin],
    name: 'Users',
    url: pageUrls.users,
    icon: < FaIcons.FaUsers size = {
      "24px"
    }
    className = "mx-3" / > ,
  },
  {
    authorizedUsers: [User],
    name: 'Reinvest',
    url: pageUrls.reinvest,
    icon: <BsIcons.BsBoxArrowLeft size = {
      "24px"
    }
    className = "mx-3" / > ,
  },

  {
    authorizedUsers: [User],
    name: "Withdraw",
    url: pageUrls.withdrawal,
    icon: <BsIcons.BsBoxArrowRight size = {
      "24px"
    }
    className = "mx-3" / > ,
  },
  {
    authorizedUsers: [User],
    name: "Referrals",
    url: pageUrls.referrals,
    icon: <FiIcons.FiUserPlus size = {
      "24px"
    }
    className = "mx-3" / > ,
  },
  {
    authorizedUsers: [User],
    name: "Profile",
    url: pageUrls.profile,
    icon: <FiIcons.FiUser size = {
      "24px"
    }
    className = "mx-3" / > ,
  },
  {
    authorizedUsers: [User],
    name: "Account Security",
    url: pageUrls.security,
    icon: <BiIcons.BiLockAlt size = {
      "24px"
    }
    className = "mx-3" / > ,
  },
  {
    authorizedUsers: [SuperAdmin],
    name: "Account Security",
    url: pageUrls.adminSecuritySettings,
    icon: <BiIcons.BiLockAlt size = {
      "24px"
    }
    className = "mx-3" / > ,
  }
]

export default links;