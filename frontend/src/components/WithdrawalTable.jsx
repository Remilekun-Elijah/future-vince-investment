import React from "react";
import { Table } from "react-bootstrap";

const withdrawalTable = () => {
  return (
    <div>
      <Table striped bordered hover variant="dark" className="tble mb-5">
        <thead className="text-start ">
          <tr className="t-head">
            <th colSpan={2}>Name</th>
            <th>Asset</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody className="text-start t-body">
          <tr className="">
            <td colSpan={2}>Brandon Benjamin</td>
            <td>Bitcoin</td>
            <td>$118</td>
          </tr>
          <tr>
            <td colSpan={2}>Justin Parker</td>
            <td>Bitcoin</td>
            <td>$2216</td>
          </tr>
          <tr>
            <td colSpan={2}>Pamela Gregory</td>
            <td>Bitcoin</td>
            <td>$3000</td>
          </tr>
          <tr>
            <td colSpan={2}>Mia Shaune</td>
            <td>Bitcoin</td>
            <td>$130000</td>
          </tr>
          <tr>
            <td colSpan={2}>Samantha Adams</td>
            <td>Bitcoin</td>
            <td>$12000</td>
          </tr>
          <tr>
            <td colSpan={2}>morten brosvik</td>
            <td>Bitcoin</td>
            <td>$150000</td>
          </tr>
          <tr className="">
            <td colSpan={2}>Nathan Joe</td>
            <td>Bitcoin</td>
            <td>$118</td>
          </tr>
          <tr>
            <td colSpan={2}>Dylan White</td>
            <td>Bitcoin</td>
            <td>$2216</td>
          </tr>
          <tr>
            <td colSpan={2}>Jesse Young</td>
            <td>Bitcoin</td>
            <td>$3000</td>
          </tr>
          <tr>
            <td colSpan={2}>Diana Alan</td>
            <td>Bitcoin</td>
            <td>$130000</td>
          </tr>
          <tr>
            <td colSpan={2}>Kayla Wayne</td>
            <td>Bitcoin</td>
            <td>$12000</td>
          </tr>
          <tr>
            <td colSpan={2}>Marilyn Willie</td>
            <td>Bitcoin</td>
            <td>$150000</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default withdrawalTable;
