import React from "react";
import { ImWarning } from "react-icons/im";
import { FaUsers } from "react-icons/fa";

const Note = () => {
  return (
    <div className=" invest-bg">
      <div className=" m-auto  card  note-custom">
        <div className="row ">
          <div className="mt-4 ">
            <h3 className="note-1">
              <ImWarning className="display-5" /> Please Note
            </h3>
          </div>
        </div>
        <p className="my-3 text-light">
          Your daily profit is added cummulatively to your <br></br> available
          balance at the end of each investment <br></br> cycle.
        </p>
      </div>
      <div className=" m-auto refere-custom  mt-5 pb-5">
        <div className="m-5">
          <div className="row">
            <div className="mt-4">
              <h3 className="note-1">
                <FaUsers className="display-5" /> REFERRAL COMMISION 10%
              </h3>
            </div>
          </div>
          <p className="my-3 text-light">
            Present your project to your friends, family or <br></br> any other
            community, advertise & and promote it <br></br> everywhere and enjoy
            the financial benefits.
          </p>
        </div>
        <button className="btn btn-custom mb-3">BECOME A MEMBER</button>
      </div>
    </div>
  );
};

export default Note;
