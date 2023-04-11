import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import { AiOutlineMail } from "react-icons/ai";

const Subscribe = () => {
  return (
    <div className=" sub-bg ">
      <div className="row tble_1 p-4 backgrnd1">
        <div className="col-md-5">
          <h1 className="text-start mt-4 text-light">Subscribe Our Newslatter</h1>
        </div>
        <div className="col-md-7 mt-4">
          <form>
            <InputGroup className="mt-1 ">
              <FormControl
                className="bg-transparent tble_2 "
                placeholder="Email Address"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <InputGroup.Text id="basic-addon2" className="Ai-bg"><AiOutlineMail className="text-light"/></InputGroup.Text>
            </InputGroup>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
