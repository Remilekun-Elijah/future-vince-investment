import React, { useState, useEffect, useRef } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import BACKEND from "../../utils/backend";
import { AiFillCopy } from "react-icons/ai";
import Alert from "../../utils/alert";

function InvestmentPlanModal(props) {
  let { show, onHide, id, title, roi, min, max, days } = props;
  const perc = roi?.substring(0, roi?.length - 2);

  const model = {
    plan: title,
    profit: 0,
    method: "bitcoin cash",
    amount: 0,
  };

  const [modelState, setModelState] = useState(model);
  const [state, setState] = useState({ profit: 0, total: 0 });
  const [inputValue, setInputValue] = useState("1CCWF7ccSFCxWywQC5VzAaG3NehUA67MHL");

  useEffect(() => {
    setState((state) => {
      return {
        ...state,
        total: (modelState.amount + Number(state.profit)).toFixed(2),
      };
    });
    // console.log(modelState, parseInt(modelState.profit));
  }, [modelState]);

  const addData = (e) => {
      const targ = e.target;
      const name = targ.name;
      setModelState({ ...modelState, [name]: targ.value });
      if (name === "amount") {
        const profit = ((perc / 100) * parseInt(targ.value)).toFixed(2);
        setModelState({
          ...modelState,
          plan: title,
          profit,
          [name]: Number(targ.value),
        });
        setState({
          ...state,
          profit,
          total: Number(profit) + Number(modelState.amount),
        });
      }
    },
    handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const res = await new BACKEND().invest(modelState);
        if (res) {
          onHide();
        }
      } catch (e) {
        console.log(e);
      }
    };
    
    const copyToClipboard = () => {
      navigator.clipboard.writeText(inputValue)
        .then(() => Alert({
          type: "success",
          message: "Copied to clipboard",
          timer: 5000
        }))
        .catch((error) => console.error("Error copying to clipboard:", error));
    }

  return (
    <Modal
      show={show}
      onHide={(_) => {
        onHide();
        setModelState(model);
        setState({ profit: 0, total: 0 });
      }}
      key={id}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
      </Modal.Header>
      <form onSubmit={handleSubmit}>
        <Modal.Body className="mx-3">
          <h5 className="modal-txt">INVESTMENT DETAILS</h5>
          <p className="modal-txt2">Investment Plan</p>
          <p className="modal-txt3">
            <strong>{title}</strong>
          </p>
          <p className="modal-txt2">investment Profit</p>
          <p className="modal-txt3">{roi}</p>
          <hr></hr>

          <div className="mb-4 ">
            <p className="modal-txt2">Investment Method</p>
            <select
              className="form-select  form-custom"
              name="method"
              aria-label="Default select example"
              onChange={addData}
            >
              <option className="modal-txt3" value="bitcoin">
                Bitcoin
              </option>
            </select>
          </div>

          <div>
            <p className="modal-txt2">Investment Amount</p>
            <input
              type="number"
              min="5"
              name="amount"
              className="form-control modal-txt3 form-custom"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              required
              onChange={addData}
            ></input>
          </div>
          <div className="mt-3">
            <p className="modal-txt2">Pay Bitcoin to wallet</p>
            <div class="input-group">
              <input
                type="text"
                min="5"
                name="amount"
                className="form-control modal-txt3 form-custom"
                id="copyToClipboard"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                aria-describedby="emailHelp"
                required
              ></input>
              <div class="w-[44px] border border-1 rounded-r-md" onClick={copyToClipboard}>
                  <AiFillCopy className="mt-2 ml-1 w-[30px]"/>
              </div>
            </div>
          </div>
          <hr></hr>
          <p className="modal-txt">PAYOUT DETAILS</p>
          <div class="row">
            <div class="col-md-4">
              <p className="modal-txt4">Final Payment</p>
              <p className="modal-txt3">{modelState.amount} USD</p>
            </div>
            <div class="col-md-4">
              <p className="modal-txt4">Received Profit</p>
              <p className="modal-txt3">
                {state.profit === "NaN" ? 0 : state.profit} USD
              </p>
            </div>
            <div class="col-md-4">
              <p className="modal-txt4">Total Payout</p>
              <p className="modal-txt3">
                {state.total === "NaN" ? 0 : state.total} USD
              </p>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button className="dash-btn border-0" type="submit">Proceed</Button>
          <Button
            className="dash-btn border-0"
            onClick={(_) => {
              onHide();
              setModelState(model);
              setState({ profit: 0, total: 0 });
            }}
          >
            Close
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
}

export default InvestmentPlanModal;
