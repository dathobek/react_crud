const mongoose = require ('mongoose');
const express = require ('express');
var cors = require ('cors');
const bodyParser = require ('body-parser');
const logger = require ('morgan');
const Data = require ('./data');

const API_PORT = 3001;
const app = express();
app.use(cors());
const router = express.Router();

//This is our MongoDB database
const dbRoute = opps ;     

// connect our backend code with database
mongoose.connect(dbRoute,{useNewUrlParser: true});

let db=mongoose.connection;

db.once('open', () => console.log('Connected to database'));

//Check if connection with database is successful
db.on('error', console.error.bind(console,'MongoDB connection error'));

