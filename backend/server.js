const express = require("express");
const app = express();
const pollsRouter = require("./routes/polls");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use("/api/polls", pollsRouter);

const PORT = 5000;
app.listen(PORT, () => {
    console.log('Server running on http://localhost:5000')
});