import React from "react";
import { Accordion } from "react-bootstrap";
import { AiOutlineQuestionCircle } from "react-icons/ai";

const Faq = () => {
  return (
    <div className="faq-bg ">
      <h1 className="display-4 text-light py-5">
        Frequently Asked <span className="title-spn">Questions</span>
      </h1>
      <p className="text-light">
        We answer some of your Frequently Asked Questions regarding our
        platform. If you <br></br> have a query that is not answered here,
        Please contact us.
      </p>
      <Accordion className=" mt-5 pb-5" >
        <Accordion.Item className="my-3 faq-1" eventKey="0">
          <Accordion.Header className="custom-Accord ">
            <AiOutlineQuestionCircle className="me-2 " />When can I deposit/withdraw from my Investment account?
          </Accordion.Header>
          <Accordion.Body>
          Deposit and withdrawal are available to users at any time. Be sure, that your funds are not used in any ongoing trade before the withdrawal. The available amount is shown in your dashboard on the main page as Available Balance.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item className="my-3 border-top faq-1" eventKey="1">
          <Accordion.Header>
            <AiOutlineQuestionCircle className="me-2" /> How do I check my account balance?
          </Accordion.Header>
          <Accordion.Body>
          You can see this anytime on your accounts dashboard. Login with your username and password to view your Available Balance
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item className="my-3 border-top faq-1" eventKey="2">
          <Accordion.Header>
            <AiOutlineQuestionCircle className="me-2" /> I forgot my password, what shoiuld I do?
          </Accordion.Header>
          <Accordion.Body>
          Visit the password reset page, type in your email address and click the `Reset` button. You will get an email guiding you on how to reset your lost password.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item className="my-3 border-top faq-1" eventKey="3">
          <Accordion.Header>
            <AiOutlineQuestionCircle className="me-2" /> How will I know that the withdrawal has been successful?
          </Accordion.Header>
          <Accordion.Body>
          You will get an automatic notification via your registered email once we send the funds and you can always check your transactions or account balance. Your chosen payment system dictates how long it will take for the funds to reach you.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item className="my-3 border-top faq-1" eventKey="4">
          <Accordion.Header>
            <AiOutlineQuestionCircle className="me-2" /> How much can I withdraw?
          </Accordion.Header>
          <Accordion.Body>
          You can withdraw the full amount of your account balance minus the funds that are used currently for supporting opened positions.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Faq;
