import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../db';
import { OpioidPrescriptionRate } from '@prisma/client';

type ModifiedOpioidPrescriptionRate = {
  opioidPrescriptionRateId: number;
  year: string;
  prscrbrGeoLvl: string;
  prscrbrGeoDesc: string;
  totPrscrbrs: string;
  totOpioidPrscrbrs: string;
  totOpioidClms: string;
  totClms: string;
  opioidPrscrbngRate: number;
  opioidPrscrbngRate5yChg: number;
  opioidPrscrbngRate1yChg: number;
  laTotOpioidClms: number;
  laOpioidPrscrbngRate: number;
  laOpioidPrscrbngRate5yChg: number;
  laOpioidPrscrbngRate1yChg: number;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<ModifiedOpioidPrescriptionRate>>
) {
  const {
    method,
    query: { state }
  } = req;
  if (method === 'GET') {
    const allOpioidPrescriptionData = await prisma.opioidPrescriptionRate.findMany({
      where: { prscrbrGeoDesc: state as string }
    });
    const modifedOpioidPrescriptionData: Array<ModifiedOpioidPrescriptionRate> =
      allOpioidPrescriptionData.map((opioidDataPoint) => {
        const {
          opioidPrescriptionRateId,
          year,
          prscrbrGeoLvl,
          prscrbrGeoDesc,
          totPrscrbrs,
          totOpioidPrscrbrs,
          totOpioidClms,
          totClms,
          opioidPrscrbngRate,
          opioidPrscrbngRate5yChg,
          opioidPrscrbngRate1yChg,
          laTotOpioidClms,
          laOpioidPrscrbngRate,
          laOpioidPrscrbngRate5yChg,
          laOpioidPrscrbngRate1yChg
        } = opioidDataPoint;
        return {
          opioidPrescriptionRateId,
          year,
          prscrbrGeoLvl,
          prscrbrGeoDesc,
          totPrscrbrs: totPrscrbrs.toString(),
          totOpioidPrscrbrs: totOpioidPrscrbrs.toString(),
          totOpioidClms: totOpioidClms.toString(),
          totClms: totClms.toString(),
          opioidPrscrbngRate,
          opioidPrscrbngRate5yChg,
          opioidPrscrbngRate1yChg,
          laTotOpioidClms,
          laOpioidPrscrbngRate,
          laOpioidPrscrbngRate5yChg,
          laOpioidPrscrbngRate1yChg
        };
      });

    res.status(200).json(modifedOpioidPrescriptionData);
  }
}
