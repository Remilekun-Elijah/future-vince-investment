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
import "tailwindcss/tailwind.css"
import config from "./utils/config";
// import DeleteModal from './components/modal/DeleteModal'


const {
  pageUrls
} = config;

function App() {
  const [isSignedUp, setIsSignedUp] = useState(false);
  
  const showTawkToScript = window.location.pathname !== '/';


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
          <Route path={pageUrls.dashboard} element={<DashboardTwo />} />
          <Route path={pageUrls.invest} element={<Invest />} />
          <Route path={pageUrls.reinvest}  element={<Reinvest />} />
          <Route path={pageUrls.profile}  element={<Profile />} />
          <Route path={pageUrls.referrals}  element={<Referrals />} />
          <Route path={pageUrls.withdrawal}  element={<Withdrawal />} />
          <Route path={pageUrls.security}  element={<SecuritySettings />} />
          <Route
            path={pageUrls.adminSecuritySettings}
            element={<AdminSecuritySettings />}
          />
          <Route path={pageUrls.users} element={<Users />} />
          <Route path={pageUrls.adminDash} element={<AdminDash />} />
          <Route path={pageUrls.adminDashTwo} element={<AdminDash2 />} />
          {/* <Route path="/deleteModal" element={<DeleteModal />}/> */}
        </Routes>
      </BrowserRouter>

      <div>
    {showTawkToScript ? (
      <script
        dangerouslySetInnerHTML={{
          __html: `
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src='https://embed.tawk.to/6432cc714247f20fefeaa87e/1gtj6t7aq';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
            })();
          `,
        }}
      />
    ) : null}
  </div>
    </div>
  );
}

export default App;
