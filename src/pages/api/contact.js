import { error } from "console";
import * as fs from "fs/promises";
const { v4: uuidv4 } = require('uuid');


export default async function handler(req, res) {

  if(req.method === 'POST') { 

  try {
    const uuid = uuidv4();
    await fs.writeFile(`Contact/${uuid}.json`, JSON.stringify(req.body));
    return res.status(200).json("Success");
  } catch (e) {
    return res.status(400).json(e);
  }

}
}
