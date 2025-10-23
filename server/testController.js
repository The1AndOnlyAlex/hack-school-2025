const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
// create config object witH PORT
const config = {
  PORT: process.env.PORT,
  DB_URL: process.env.DB_URL,
};
mongoose
  .connect(config.DB_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB: ", err));

// Uncomment this code block to test getPolls

const { getPolls } = require("./controllers/pollController");

(async () => {
  console.log("Running getPolls()...");
  const result = await getPolls();
  console.log(result);
})();

// Uncomment this code block to test getPoll

const { getPoll } = require("./controllers/pollController");

(async () => {
  console.log("Running getPoll()...");
  const result = await getPolls("67144a73c527df736fbe5eac");
  console.log(result);
})();

// Uncomment this code block to test postPoll

// const { postPoll } = require("./controllers/pollController");

// (async () => {
//   console.log("Running postPoll()...");
//   const result = await postPoll({
//     ownerId: "Tyler",
//     title: "Tyler's poll",
//     description: "Tyler's poll description",
//     options: [
//       {
//         option: "Poll option #1",
//         count: 0,
//       },
//     ],
//   });
//   console.log(result);
// })();

// Uncomment this code block to test postVote

// const { postVote } = require("./controllers/pollController");

// (async () => {
//   console.log("Running postVote()...");
//   const result = await postVote(
//     {
//       pollId: "67144a73c527df736fbe5eac",
//       optionId: "67144a73c527df736fbe5ead",
//     },
//     {}
//   );
//   console.log(result);
// })();
