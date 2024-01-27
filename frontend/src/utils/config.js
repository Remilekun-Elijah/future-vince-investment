const environment = {};

const pageUrls = {
  home: "/",
  login: "/login",
  signup: "/signup",
  dashboard: "/user/dashboard",
  adminDash: "/adminDash",
  adminDashTwo: "/admin/dashboard",
  invest: "/invest",
  reinvest: "/reinvest",
  withdrawal: "/withdrawal",
  referrals: "/referrals",
  profile: "/user/profile",
  security: "/user/security/settings",
  adminSecuritySettings: "/admin/security/settings",
  users: "/users",
};

environment.development = {
  //  backendUrl: "http://localhost:9000/v1",
  authProps: ["btcengine/token", "btcengine/user"],
  backendUrl: "https://bitcoinengine.cyclic.app/v1",
  pageUrls,
};
environment.production = {
  authProps: ["btcengine/token", "btcengine/user"],
  backendUrl: "https://bitcoinengine.cyclic.app/v1",
  pageUrls,
};

export default environment[process.env.NODE_ENV];
