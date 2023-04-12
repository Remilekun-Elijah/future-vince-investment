import React from "react";
import { Tabs, Tab, Nav } from "react-bootstrap";
import DepositTable from "./DepositTable";
import WithdrawalTable from "./WithdrawalTable";

const DepositAndWithdrawal = () => {
  return (
    <div className="bg-black pt-5 pb-5">
      <div>
      <Tabs
        variant="pills"
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3 pt-5  d-flex justify-content-center border-0 "
      >
        <Tab
          className="text-dark"
          eventKey="home"
          title="Latest Deposit"
        >
          <DepositTable />
        </Tab>
        <Tab eventKey="profile" title="Latest Withdraw">
          <WithdrawalTable />
        </Tab>
      </Tabs>
      </div>
    </div>
  );
};

export default DepositAndWithdrawal;
