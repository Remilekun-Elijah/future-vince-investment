import "./App.css";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import AboutPage from "./pages/AboutPage";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import DashboardTwo from "./pages/DashboardTwo";
import SecuritySettings from "./components/dashboard/accountSecurity/SecuritySettings";
import AdminSecuritySettings from "./components/dashboard/accountSecurity/AdminSecuritySettings";
import Invest from "./components/dashboard/investment/Invest";
import Profile from "./components/dashboard/profile/Profile";
import Referrals from "./components/dashboard/referrals/Referrals";
import Reinvest from "./components/dashboard/reinvest/Reinvest";
import Withdrawal from "./components/dashboard/withdraw/Withdrawal";
import Users from "./components/admin/Users";
import AdminDash from "./components/admin/AdminDash";
import AdminDash2 from "./components/admin/AdminDash2";
import { useState } from "react";
// import DeleteModal from './components/modal/DeleteModal'

function App() {
  const [isSignedUp, setIsSignedUp] = useState(false);
  


  return (
    <div className="App overflow-x-hidden">
      <BrowserRouter>
        {/* <Navigationbar isSignedUp={isSignedUp} setIsSignedUp={setIsSignedUp}/> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/AboutPage" element={<AboutPage />} />
          <Route path="/ContactPage" element={<SignUp />} />
          <Route
            path="/login"
            element={
              <Login isSignedUp={isSignedUp} setIsSignedUp={setIsSignedUp} />
            }
          />
          <Route
            path="/signup"
            element={
              <SignUp isSignedUp={isSignedUp} setIsSignedUp={setIsSignedUp} />
            }
          />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboardtwo" element={<DashboardTwo />} />
          <Route path="/invest" element={<Invest />} />
          <Route path="/reinvest" element={<Reinvest />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/referrals" element={<Referrals />} />
          <Route path="/withdrawal" element={<Withdrawal />} />
          <Route path="/securitySettings" element={<SecuritySettings />} />
          <Route
            path="/AdminSecuritySettings"
            element={<AdminSecuritySettings />}
          />
          <Route path="/users" element={<Users />} />
          <Route path="/adminDash" element={<AdminDash />} />
          <Route path="/adminDash2" element={<AdminDash2 />} />
          {/* <Route path="/deleteModal" element={<DeleteModal />}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
