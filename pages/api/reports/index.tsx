import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../db';
import { report as ReportType } from '@prisma/client';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ReportType | ReportType[]>
) {
  const { method } = req;
  if (method === 'GET') {
    const allReports = await prisma.report.findMany();
    res.status(200).json(allReports);
  } else if (method === 'POST') {
    const { reportName, userId, summary, opioidGraphUrl, medicareGraphUrl, state, ageLevel } =
      req.body;
    const newReport = await prisma.report.create({
      data: { reportName, userId, summary, opioidGraphUrl, medicareGraphUrl, state, ageLevel }
    });
    res.status(201).json(newReport);
  }
}
