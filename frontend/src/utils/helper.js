import Storage from "./storage";
import config from "./config";

const userInfo = Storage.get('user');
console.log(userInfo)


export const Roles = {
    SuperAdmin: "SuperAdmin",
    user: 2
   }

