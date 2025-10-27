// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from "fs/promises";

export default async function handler(req, res) {
  let blogs = [];
  let { pageSize } = req.query;

  try {
    const myFiles = await fs.readdir("blogData");
    for (let i = 0; i < parseInt(pageSize); i++) {
      const d = await fs.readFile(`blogData/${myFiles[i]}`, "utf-8");
      blogs.push(JSON.parse(d));
    }
    return res.status(200).json({ totalResults: myFiles.length, blogs });
  } catch (err) {
    return res.status(500).json({ err: err });
  }
}
