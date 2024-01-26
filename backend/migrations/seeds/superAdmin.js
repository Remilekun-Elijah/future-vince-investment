const dayjs = require("dayjs");
const ObjectId = require("mongoose").Types.ObjectId;

const accountId = [
    new ObjectId("631f5ed70cf3d8d5817f021a"),
    new ObjectId("631f5ed70cf2d7d5814f121a"),
  ],
  profileId = [
    new ObjectId("622af0006bc5509231ae69f7"),
    new ObjectId("622af0006bc4419123ae89f6"),
  ];

const account = [
  {
    _id: accountId[0],
    passwordArchived: [],
    email: "remilekunelijah@outlook.com",
    password: "$2b$10$JrtLtF9u1OmDgVVqyHICfup8htTbH9cqzgNdO/0G/LVItyOh4kTrG", // superAdmin@1
    role: 0,
    status: "active",
    isEnabled: true,
    lastLogin: dayjs(new Date()).format("YYYY-MM-DD HH:mm"),
    createdAt: "2020-04-08T19:07:36.000Z",
    updatedAt: "2020-04-08T19:07:36.000Z",
  },
  {
    _id: accountId[1],
    passwordArchived: [],
    email: "bitcoinengine.org@gmail.com",
    password: "$2b$10$RstRNdqulUja1nZ8YgsrdeETonOuKgOjCaC8XXXQtQ5And9Q7a3Nu", // Frank@001
    role: 0,
    status: "active",
    isEnabled: true,
    lastLogin: dayjs(new Date()).format("YYYY-MM-DD HH:mm"),
    createdAt: "2020-04-08T19:07:36.000Z",
    updatedAt: "2020-04-08T19:07:36.000Z",
  },
];

const profile = [
  {
    _id: profileId[0],
    user: accountId[0],
    number: "+2349032521166",
    email: "remilekunelijah@outlook.com",
    firstName: "Remilekun",
    lastName: "Elijah",
    userName: "Remi",
    country: "Nigeria",
    state: "Lagos",
    avatar:
      "https://res.cloudinary.com/remilekunelijah/image/upload/v1649448174/personal/avatar_pic.png",
    coverImage:
      "https://res.cloudinary.com/remilekunelijah/image/upload/v1648212327/Learno/techchak.jpg",
    createdAt: "2020-04-08T19:07:36.000Z",
    updatedAt: "2020-04-08T19:07:36.000Z",
  },
  {
    _id: profileId[1],
    user: accountId[1],
    number: "+2348147722463",
    email: "bitcoinengine.org@gmail.com",
    firstName: "Frank",
    lastName: "Admin",
    userName: "Frank",
    country: "Nigeria",
    state: "Lagos",
    avatar:
      "https://res.cloudinary.com/remilekunelijah/image/upload/v1649448174/personal/avatar_pic.png",
    coverImage:
      "https://res.cloudinary.com/remilekunelijah/image/upload/v1648212327/Learno/techchak.jpg",
    createdAt: "2020-04-08T19:07:36.000Z",
    updatedAt: "2020-04-08T19:07:36.000Z",
  },
];

module.exports = {
  account,
  profile,
};
