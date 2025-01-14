import express from 'express';
import router from './routes/router.js';
import dotenv from 'dotenv';
import morgan from 'morgan';

const app = express();

// read env file
dotenv.config({
  path: "./config.env"
})

const middleware1 = (req, res, next) => {
  console.log("Request Node ");
  next();
}

const middleware2 = (req, res, next) => {
  console.log(new Date().toUTCString());
  next();
}

const middleware3 = (req, res) => {
  res.status(404)
  res.send(`${req.url} not found on server!`)
}

// use third-party middleware
app.use(morgan('short'));

// use build-in middleware
app.use(express.static('public'))

//attach middleware to  express, will trigger when nagivate to home
app.use(middleware1);
app.use(middleware2);

// mount the router ( /home to /)
app.use('/home', router);

// this is place below router because we want to get response from visiting the server
app.use(middleware3)



const { PORT } = process.env
app.listen(PORT, () => { console.log('Server is running on port 3300') });
