import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

export default function signInHandler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method === 'GET') {
    //TODO get user based off entered username and password
    const { username, password } = req.body;
  } else {
  }
  res.status(200).json({ name: 'John Doe' });
}
