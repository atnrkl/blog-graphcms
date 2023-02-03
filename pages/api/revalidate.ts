import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Check for secret to confirm this is a valid request
  const body: any = await getRawBody(req);
  if (!body) {
    res.status(400).send("Bad request (no body)");
    return;
  }
  if (req.query.secret !== process.env.MY_SECRET_TOKEN) {
    return res.status(401).json({ message: "Invalid token" });
  }

  const jsonBody = JSON.parse(body);
  console.log(jsonBody);

  try {
    // This should be the actual path not a rewritten path
    // e.g. for "/blog/[slug]" this should be "/blog/post-1"
    await res.revalidate("/");
    return res.json({ revalidated: true });
  } catch (err) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return res.status(500).send("Error revalidating");
  }
  function getRawBody(req: any) {
    return new Promise((resolve, reject) => {
      let bodyChunks: any = [];
      req.on("end", () => {
        const rawBody = Buffer.concat(bodyChunks).toString("utf8");
        resolve(rawBody);
      });
      req.on("data", (chunk: any) => bodyChunks.push(chunk));
    });
  }
}
