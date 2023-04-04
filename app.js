import express from 'express';
import HelloController
    from "./controllers/hello-controller.js";
import UserController
    from "./controllers/users/users-controller.js";
import TuitsController
    from "./controllers/tuits/tuits-controller.js";
import cors from 'cors'
import mongoose from "mongoose";

const app = express();

app.use(cors());
app.use(express.json());

const CONNECTION_STRING =  process.env.DB_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/tuiter';

mongoose.connect(CONNECTION_STRING);
console.log("Connected to MongoDB")


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

TuitsController(app);
HelloController(app);
UserController(app);
app.listen(process.env.PORT || 4000);



