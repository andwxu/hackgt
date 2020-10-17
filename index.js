require("dotenv").config();
const express = require("express");
const app = express();
const googleAuth = require("./auth.js");
const googleSheets = require("./sheets.js");

const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let AUTH = googleAuth
  .authorize()
  .then((auth) => {
    AUTH = auth;
  })
  .catch((err) => {
    console.log("auth error", err);
  });

app.post("/order/orders", (req, res) => {
    if (req.body.user) {
        let orderInfo = req.body;
        googleSheets.newOrder(AUTH, orderInfo).then( () => {
            res.status(200);
            res.send("Success!");
        })
        .catch( () => {
            res.status(400);
            res.send("Something failed.");
        });
    }
}).listen(PORT);

console.log(PORT);
