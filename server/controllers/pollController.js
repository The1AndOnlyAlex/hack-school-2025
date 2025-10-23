const Poll = require("../models/Poll");

// TODO
// ACTIVITY 2a - Implement getPolls function (return all polls)
const allPolls = async () => {
    const poll = await Poll.find();
    console.log("Returning all Polls: ");
    return poll;
}

// ACTIVITY 2b - Implement getPoll function (get one poll by id)
const getPolls = async(params) => {
    const id = params;
    const poll = await Poll.findById(id).exec();

    console.log(`Returning individual Poll: ${id} `);
    return poll;
}

// END ACTIVITY 2

// TODO
// ACTIVITY 3a - Implement postPoll function to create a new poll


// ACTIVITY 3b - Implement postVote function to cast a vote

// ACTIVITY 3c - Implement module exports

module.exports = {
    allPolls,
    getPolls
}

// END ACTIVITY 3
