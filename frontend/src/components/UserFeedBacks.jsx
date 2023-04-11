import React from "react";

const UserFeedBacks = () => {
  const feedBacks = [
    {
      id: 1,
      country: "USA",
      name: "Sundax Ezma",
      img: "./images/feed1.jpg",
      msg: "Very friendly staff, everyone is efficient, polite and knowledgeable and go that little bit further than others. It is enjoyable to talk with a real person who takes personal interest in the conversation and has the knowledge to resolve and or explain the situation. The little things that make a big difference are what you notice. Theres no down side. If you have $10,000 or more in your bank account, you need to sign up with Elon Trader!",
    },
    {
      id: 2,
      country: "India",
      name: "Monalisa Thakur",
      img: "./images/feed2.jpg",
      msg: "For the 4 plus years investing with Elon Trader, I have been extremely satisfied with there investment packages. There havebeen some issues, but a chat with their customer support quickly resolved them. They have always delivered as promised. Business decisions and procedures where easily modified to maintain completion of procedures even with COVID.",
    },
    {
      id: 3,
      country: "Singapore",
      name: "Donald I.",
      img: "./images/feed3.jpg",
      msg: "I have invested with this platform and gotten my money in my account. This is legit and safe. Great doing business with them,",
    },
  ];
  return (
    <div className="feedback-bg ">
      <h1 className="text-light  pt-5 display-4">
        What Users Say <span className="title-spn">About Us</span>
      </h1>
      <p className="text-light my-4">
        We are doing really good at this market and here are the words we loved
        to get from a <br></br> few of our users.
      </p>
      <div className="feedbacks row px-3">
        {feedBacks.map((feedBack) => (
          <div
            className="feedback col-lg-3 my-3 border text-start "
            key={feedBack.id}
          >
            <p className="m-3">{feedBack.msg}</p>
            <div className=" d-flex justify-content-end">
              <img className="feedback-img " src={feedBack.img} alt="user" />
            </div>
            <p className="ms-3">{feedBack.name}</p>
            <p className="ms-3 ">User From {feedBack.country}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserFeedBacks;
