const express = require("express");
// require("dotenv").config();
const app = express();
app.use(express.json());
const userRoute = require("./Routes/userRoute");


app.get("/nishant", (req, res) => {
    console.log("welcome to the first page");
    res.send("i am the first");
});

app.use("/user", userRoute);

app.listen(4001, () => {
    console.log('app is running on  port ')
})


