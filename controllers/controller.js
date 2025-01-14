import getData from "../db/dataRepo.js";

const hello = (req, res) => {
  res.status(200);
  res.send('Hello you')
  // next();
}


const addMessage = (req, res) => {
  res.status(200);
  res.send('This is addMessage')
}

const course = (req, res) => {
  res.status(200);
  res.json({
    class: "SDEV 402",
    name: "Cloud Computing"
  })
}

const unknown = (req, res) => {
  res.status(400);
  res.end()
}

const printData = (req, res) => {
  res.status;
  res.json(getData());
}

export default { hello, addMessage, course, unknown, printData } 