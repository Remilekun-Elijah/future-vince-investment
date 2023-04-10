import React from "react";
import { Table } from "react-bootstrap";

const DepositTable = () => {
  return (
    <div>
      <Table striped bordered hover variant="dark" className="tble mb-5">
        <thead className="text-start t-head">
          <tr>
            <th colSpan={2}>Name</th>
            <th>Asset</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody className="text-start t-body">
        <tr>
            <td colSpan={2}>James Lucas</td>
            <td>Bitcoin</td>
            <td>$550</td>
          </tr>
          <tr>
            <td colSpan={2}>Liam Oliver</td>
            <td>Bitcoin</td>
            <td>$400</td>
          </tr>
          <tr>
            <td colSpan={2}>Stefano Visentini</td>
            <td>Bitcoin</td>
            <td>$100</td>
          </tr>
          <tr>
            <td colSpan={2}>Bella Zammit</td>
            <td>Bitcoin</td>
            <td>$300</td>
          </tr>
          <tr>
            <td colSpan={2}>Morten Brosvik</td>
            <td>Bitcoin</td>
            <td>$550</td>
          </tr>
          <tr>
            <td colSpan={2}>Thaps</td>
            <td>Bitcoin</td>
            <td>$350</td>
          </tr>
          <tr>
            <td colSpan={2}>Mia shaune</td>
            <td>Bitcoin</td>
            <td>$600</td>
          </tr>
          <tr>
            <td colSpan={2}>Brad Henry</td>
            <td>Bitcoin</td>
            <td>$100</td>
          </tr>
          <tr>
            <td colSpan={2}>Amelia</td>
            <td>Bitcoin</td>
            <td>$300</td>
          </tr>
          <tr>
            <td colSpan={2}>Charlotte Tom</td>
            <td>Bitcoin</td>
            <td>$400</td>
          </tr>
          <tr>
            <td colSpan={2}>Sophia Scott</td>
            <td>Bitcoin</td>
            <td>$550</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default DepositTable;
