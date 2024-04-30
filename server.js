require("dotenv").config();
const { sendEmailUsingGmail } = require("./controllers/sendingEmailUsingGmail");
const express = require("express");
const app = express();
const cors = require("cors");
const helmet = require("helmet");
const xss = require("xss-clean");
const rateLimiter = require("express-rate-limit");

app.use(express.json());

app.use(helmet());
app.use(xss());
app.use(cors());
app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000,
    max: 1000,
  })
);

app.get("/", (req, res) => {
  res.send("connected");
});

app.post("/sendEmail", sendEmailUsingGmail);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
