const environment = {}

const pageUrls = {
  login: '/',
  dashboard: '/dashboardtwo',
  adminDash: '/adminDash',
  adminDashTwo: '/adminDash2',
  invest: '/Invest',
  reinvest: '/Reinvest',
  withdrawal: '/Withdrawal',
  referrals: '/Referrals',
  profile: '/Profile',
  security: '/SecuritySettings',
  adminSecuritySettings: '/AdminSecuritySettings',
  users: '/users'
}


environment.development= {
  //  backendUrl: "http://localhost:9000/v1",
  authProps: ['Elon/token', 'Elon/user'],
   backendUrl: "https://api-vince.onrender.com/v1",
  pageUrls,

  }
  environment.production= {
    authProps: ['Elon/token', 'Elon/user'],
   backendUrl: "https://api-vince.onrender.com/v1",
  pageUrls,


  }


export default environment[process.env.NODE_ENV]

