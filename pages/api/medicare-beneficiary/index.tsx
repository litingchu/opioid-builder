import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../db';
import { MedicareBeneficiary } from '@prisma/client';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<MedicareBeneficiary>>
) {
  const {
    method,
    query: { state, ageLevel }
  } = req;
  if (method === 'GET') {
    const allMedicareBeneficiaryData = await prisma.medicareBeneficiary.findMany({
      where: {
        beneGeoDesc: state as string,
        beneAgeLvl: ageLevel as string
      }
    });
    res.status(200).json(allMedicareBeneficiaryData);
  }
}
