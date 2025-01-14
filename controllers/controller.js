import getData from "../db/dataRepo.js";

const pageLoader = (req, res) => {
  const page = req.query.page;
  // http://localhost:3300/home/pages?page=page1
  if (page === "page1") {
    res.send("Page 1")
  } else if (page === "page2") {
    res.send("Page 2")
  } else if (page === "page3") {
    res.send("Page 3")
  } else {
    res.send("Unknown page")
  }
}

const name = (req, res) => {
  const name = req.query.name;
  // http://localhost:3300/home/name?name=fname
  if (name === "fname") {
    res.send("fname is Luke")
  } else if (name === "lname") {
    res.send("lname is Cheng")
  } else if (name === "nickname") {
    res.send("nickname is luke cheng")
  } else {
    res.send("Unknown page")
  }
}

const user = (req, res) => {
  const userID = req.params.userID;
  res.send(`Welcome user ${userID}`)
}


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


export default { pageLoader, hello, addMessage, course, unknown, printData, name, user } 