import type { NextApiRequest, NextApiResponse } from "next";

import posts from "../../public/posts.json";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<typeof posts>
) {
  res.status(200).json(posts);
}
