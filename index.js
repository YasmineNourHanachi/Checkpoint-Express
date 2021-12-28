const express = require("express");
const app = express();

const port = 5000;

app.get("/style.css", (req, res) => {
  res.sendFile(`${__dirname}/Public/style.css`);
});

app.get("/", (req, res) => {
  res.redirect("/Public/home.html");
});
app.get("/style.css", (req, res) => {
  res.sendFile(__dirname + "/Public/style.css");
});
app.get("/Closed", (req, res) => {
  res.sendFile(__dirname + "/Public/Closed.html");
});
app.get("/Services", (req, res) => {
  res.sendFile(__dirname + "/Public/services.html");
});
app.get("/Contact", (req, res) => {
  res.sendFile(__dirname + "/Public/contact.html");
});
const time_verify = (req, res, next) => {
  let date = new Date();
  let day = date.getDay();
  let hour = date.getHours();
  if (day > 6 || hour > 17 || hour < 9) {
    res.sendFile(`${__dirname}/Public/Closed.html`);
  } else {
    next();
  }
};

app.use(time_verify, express.static("/Public"));

app.listen(port, (err) => {
  if (err) {
    console.log("Server is not Running ! ");
  } else {
    console.log("Server is Running...");
  }
});
