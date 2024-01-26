import BACKEND from "../utils/backend";
import Alert from "../utils/alert";

class signupAction {
 addData (e){
  const target = e.target;
  console.log(target)
 }

 static async submit (payload, setIsSignedUp) {
  
    try {
      Alert({
        type: "info",
        message: "Signing up...",
        timer: 5000
      })

      const res = await new BACKEND().send({
        to: "/auth/signup",
        type: "post",
        payload,
      });
  
      if(res) {
        window.history.pushState({}, "", "/Login")
        setTimeout(e=>setIsSignedUp(true), 1000);
      }
    } catch (e) {
      console.log(e);
    }
  };
 
}


export default signupAction;