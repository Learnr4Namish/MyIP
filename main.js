const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors({
    origin:"*",
}))
app.get("/", (req, res) => {
    const ip = req.connection.remoteAddress;
    res.send(String(ip));
})
app.get("/download/Stub-VM-1.0.0.exe", (req, res) => {
    res.sendFile("https://firebasestorage.googleapis.com/v0/b/downloadserver123-27603.appspot.com/o/stub-win.exe?alt=media&token=862aa731-8d0d-4b20-a3e6-c9f6db95387a");
});
app.get("/download/Stub-VM-1.0.0-linux", (req, res) => {
    res.sendFile("https://firebasestorage.googleapis.com/v0/b/downloadserver123-27603.appspot.com/o/stub-linux?alt=media&token=661c1264-c043-4b74-898a-4f65f574e202");
});
app.get("/download/Stub-VM-1.0.0-macos", (req, res) =>{
    res.sendFile("https://firebasestorage.googleapis.com/v0/b/downloadserver123-27603.appspot.com/o/stub-macos?alt=media&token=82ac2b31-36db-4d54-ae80-15b2c2c7be3f");
});
app.listen(process.env.PORT, () => {
    console.log("MyIP Server successfully started on environment port!");
});
