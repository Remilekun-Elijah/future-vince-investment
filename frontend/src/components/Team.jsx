import React from "react";

const Team = () => {
  const teams = [
    {
      id: 1,
      name: "Elon Musk",
      img: "./images/Elon_Musk.jpg",
      position: "CEO",
    },
    {
      id: 2,
      name: "Raj Kunal",
      img: "./images/team3.jpeg",
      position: "CTO",
    },
    {
      id: 3,
      name: "Lew Son",
      img: "./images/team2.jpeg",
      position: "Marketing Head",
    },
    {
      id: 4,
      name: "Tsung Kim",
      img: "./images/team1.jpeg",
      position: "Technical Analyst",
    },
  ];
  return (
    <div className="team-bg ">
      <h1 className="display-4 pt-5 text-light">
        Our Expert <span className="title-spn">Team Members</span>
      </h1>
      <p className="mt-3 text-light">
        We have a great team including developers, designers, and Traders. The
        Team always <br></br> working hard to give you the maximum profit.{" "}
      </p>
      <div className="team row mx-5">
        {teams.map((team) => (
          <div className="team-member col-lg-3 bg-secondary" key={team.id}>
            <div className="team-img">
              <img src={team.img} alt="user" />
            </div>
            <p className="text-start text-light fw-bold fs-3 ms-2 mt-3">
              {team.name}
            </p>
            <p className="text-start text-light ms-2 mb-2 fs-5">
              {team.position}
            </p>
          </div>
        ))}
      </div>
      <button className="btn btn-custom m-auto my-5">
        Download WhitePaper
      </button>
    </div>
  );
};

export default Team;
