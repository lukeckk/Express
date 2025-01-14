import express from 'express';
import router from './routes/router.js';
import dotenv from 'dotenv';

const app = express();

// read env file
dotenv.config({
  path: "./config.env"
})

console.log(process.env)

// mount the router ( /home to /)
app.use('/home', router);


const { PORT } = process.env
app.listen(PORT, () => { console.log('Server is running on port 3300') });
