import React, { useState, useEffect } from "react";
import Dashboard from "../../../pages/Dashboard";
import DashNavbar from "../../DashNavbar";
import BACKEND from '../../../utils/backend';
import Storage from "../../../utils/storage";

const Reinvest = () => {
  const {bank: {plan}} = Storage.get("user");

  const perc = plan?.percentage
  console.log(perc+"%", "ROI", plan?.name);
  const model = {
    plan: plan?.name,
    profit: 0,
    method: 'bitcoin cash',
    amount: 0,
  }
  const [modelState, setModelState] = useState(model);
  const [state, setState] = useState({profit: 0, total: 0});

  useEffect(() => {
    setState(state=>{
     return  {...state, total: (modelState.amount+Number(state.profit)).toFixed(2)}
    });
    console.log(modelState, parseInt(modelState.profit));
  }, [modelState]);

  const addData = (e) => {
    const targ = e.target;
    const name = targ.name;
    setModelState({...modelState, [name]: targ.value});
    if(name === 'amount'){
      const profit = (perc / 100 * parseInt(targ.value)).toFixed(2);
      setModelState({...modelState, profit, [name]: Number(targ.value)});
      setState({...state, profit, total: Number(profit) + Number(modelState.amount)});
      
    }
  },
  
  handleSubmit = async (e)=> {
    e.preventDefault();
    try{
    const res = await new BACKEND().invest(modelState);
    if(res){
      // onHide();
    }
    }catch(e){
      console.log(e);
    }
  }
  return (
    <div className=" feedback-bg-dash vh-100 pt-5">
      <DashNavbar />
      <Dashboard />
      <form onSubmit={handleSubmit} className="col-md-8 dash-text my-5 reinvest  ">
        <div className="card rein-crd  me-2 ">
          <div className="card-body">
            <hr className="mt-4"></hr>
            <p className="card-text fw-bold text-start mt-5">
              Reinvestment Amount
            </p>
            <input
              name="amount"
              type="text"
              className="form-control mb-4"
              placeholder="Enter Amount"
              required 
              onChange={addData}
            ></input>
            <hr></hr>
            <div className="row text-start">
              <h6 className="text-secondary mt-4">PAYMENT DETAILS</h6>
              <div className="col-md-4">
                <h5 className="">Final Payment</h5>
                <p className="text-secondary">{modelState.amount} USD</p>
              </div>
              <div className="col-md-4">
                <h5 className="">Received Profit</h5>
                <p className="text-secondary">+ { state.profit==='NaN'?0: state.profit} USD</p>
              </div>
              <div className="col-md-4">
                <h5 className="">Total Payout</h5>
                <p className="text-secondary">{state.total==='NaN'?0:state.total} USD</p>
              </div>
            </div>
            <button className="btn dash-btn text-start my-4" type="submit">Proceed </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Reinvest;
