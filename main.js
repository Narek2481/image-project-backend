import express from "express";
import path from "path"
import bp from "body-parser";
import cors from "cors";

const app = express();

app.use(bp.json());
app.use(bp.urlencoded({ extended: true }))
app.use(cors());
app.listen(4000);
app.get("/" , (req, res) => {
    res.send('ok');
});
app.post("/registr_submit", (req, res) => {
    console.log(req.body);
    res.send("good");
});