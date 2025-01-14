import fs from 'fs'

const getData = () => {
  let data = fs.readFileSync("./db/data.json");
  // turn into json format
  data = JSON.parse(data)
  console.log(data);
  return data;
}

export default getData;