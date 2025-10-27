// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from "fs/promises"
import { json } from "stream/consumers";

export default async function handler(req, res) {

  const {slug} = req.query
  //req ={....query: { slug: 'learn-js' },......}
  // console.log(slug)  
  
  try
  {
    const content = await fs.readFile(`blogData/${slug}.json`,"utf-8")
    return res.status(200).json(JSON.parse(content));
  }
  catch(err)
  {
    return res.status(500).json({"err": "Internal Server Error"}) 
  }
  
}
