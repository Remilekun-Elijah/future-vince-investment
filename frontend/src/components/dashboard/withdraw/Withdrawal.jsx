import React from "react";
import Dashboard from "../../../pages/Dashboard";
import Storage from "../../../utils/storage";
import DashNavbar from "../../DashNavbar";
import BACKEND from "../../../utils/backend";
import Alert from "../../../utils/alert";
import { ImWhatsapp } from "react-icons/im";


const Reinvest = () => {
  const {bank: {walletId, balance }} = Storage.get("user");
  

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const {target} = e;

    const payload = {
      amount: target.amount.value,
      method: target.method.value,
      walletId: target.walletId.value
    }
    if (parseInt(balance) >= parseInt(payload.amount)) {
     await new BACKEND().withdraw(payload);
    }else {
      Alert({
        type: 'error',
        message: "Insufficient funds"
      }) 
    }
  }


  return (
    <Dashboard >
      <DashNavbar />
    <div className="pb-5">
      <div className=" text-strat w-[90%] pt-[5%]">
        <h1 className="text-[var(--C_black_lite)]  text-start  ">Withdraw</h1>
        <p className="text-[var(--C_black_lite)]  text-start  ">
          Withdraw funds from your Bitcoin Engine account.
        </p>
        <form onSubmit={handleSubmit} className="card w-[95%] m-auto my-5 border-0">
          <div className="card-body bg-gray-100 text-start rounded-lg drop-shadow-md">
            <label className="card-text fw-bold  mt-3 mb-2 ">
              Withdrawal Amount
            </label>
            <input type="number" name="amount" min="5"  className="form-control mb-4" ></input>
            <label className="card-text fw-bold text-start mb-2">
              Withdrawal Method
            </label>
            <div class="input-group mb-4">
              <select name="method" class="form-select" id="inputGroupSelect01">
                <option selected>Choose...</option>
                <option value="bitcoin">Bitcoin</option>
              </select>
            </div>
            <label className="card-text fw-bold text-start mb-2">
              Withdrawal Address
            </label>
            <input
              name="walletId"
              type="text"
              className="form-control"
              value={walletId}
              placeholder="31swkZUdX6byEujxGNXvowX8Lzf8cTCnyY"
            ></input>
            <button type="submit" className="btn dash-btn text-start my-4">Proceed</button>
          </div>
        </form>
      </div>
    </div>
    <a href="https://wa.link/b3ynmh" className=" text-decoration-none">
		<ImWhatsapp className="absolute xl:right-[3px] xl:bottom-[9%] lg:right-[2%] md:right-[5%] md:bottom-[10%] right-[8%] bottom-[8%] md:w-[5%] w-[10%] md:h-[5%] h-[10%] text-gray-600"/>
		</a>
    </Dashboard>
  );
};

export default Reinvest;
