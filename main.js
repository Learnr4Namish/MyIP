const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors({
    origin:"*",
}))
app.get("/", (req, res) => {
    const ip = req.ip;
    res.send(String(ip));
})
app.listen(process.env.PORT, () => {
    console.log("MyIP Server successfully started on environment port!");
});