const mongoose = require("mongoose");
const express = require("express");
const config = require("./config/config"); 
const User = require("./router/customerRouter"); // VAD TÄNKTE VI HÄR?
const Admin = require("./router/adminRouter"); // VAD TÄNKTE VI HÄR?
const path = require("path");
const app = express();
const cookieparser = require("cookie-parser");

app.use(cookieparser());

app.use(express.urlencoded({ extended: true }));

//const dbUrl = process.env.MONGO_ATLAS_URL;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.use(User); // VAD TÄNKTE VI HÄR?
app.use(Admin); // VAD TÄNKTE VI HÄR?

const dbOptions = { useUnifiedTopology: true, useNewUrlParser: true };
const port = process.env.PORT || 8002;
mongoose.connect(config.databaseURL, dbOptions).then(() => {
  app.listen(port, () => console.log(`App listening on port ${port}!`));
}); 