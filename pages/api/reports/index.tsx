import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { method } = req;
  if (method === 'GET') {
    //TODO get all reports
  } else if (method === 'POST') {
    //TODO create a new report
  } else {
  }
  res.status(200).json({ name: 'John Doe' });
}