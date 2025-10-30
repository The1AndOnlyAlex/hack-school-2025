const mongoose = require('mongoose');

const OptionSchema = new mongoose.Schema(
  {
    option: String,
    count: Number,
  },
  { _id: true }
);

const PollSchema = new mongoose.Schema(
  {
    ownerId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: String,
    options: [OptionSchema],
    totalVotes: Number,
  },
  { id: true }
);

const Poll = mongoose.model('Poll', PollSchema);

module.exports = Poll;