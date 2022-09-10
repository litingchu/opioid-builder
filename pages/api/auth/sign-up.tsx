import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

export default function signUpHandler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { method } = req;
  if (method === 'POST') {
    const { username, password } = req.body;
    //TODO take care of encrypting password and inserting into db
  } else {
  }
  res.status(200).json({ name: 'John Doe' });
}
