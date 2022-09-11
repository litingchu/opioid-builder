import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../db';
import { report as ReportType } from '@prisma/client';

type Data = {
  reportId: string | string[] | undefined;
};

export default async function reportsHandler(
  req: NextApiRequest,
  res: NextApiResponse<ReportType | null>
) {
  if (req.method === 'GET') {
    const { query } = req;
    const { reportId } = query;
    const report = await prisma.report.findUnique({
      where: {
        reportId: Number(reportId)
      }
    });
    //TODO need to get GCP url
    res.status(200).json(report);
  }
}
