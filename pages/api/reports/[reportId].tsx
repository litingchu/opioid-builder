import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  reportId: string | string[] | undefined;
};

export default function reportsHandler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method === 'GET') {
    //TODO get all reports
    const { query } = req;
    const { reportId } = query;
    res.status(200).json({ reportId });
  } else {
  }
  //res.status(200).json({ name: 'John Doe' });
}
