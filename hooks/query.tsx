import { useQuery } from 'react-query';
import axios from 'axios';

export const useMedicareBeneficiaryByStateAndAgeLevel = (
  state: string | null,
  ageLevel: string | null
) => {
  return useQuery({
    queryKey: ['medicareBeneficiaryByStateAndAgeLevel', state, ageLevel],
    queryFn: () => {
      if (!state || !ageLevel) {
        return null;
      }
      return axios.get(`/api/medicare-beneficiary?state=${state}&ageLevel=${ageLevel}`);
    }
  });
};

export const useOpioidPrescriptionRateByState = (state: string | null) => {
  return useQuery({
    queryKey: ['opioidPrescriptionRatesByState', state],
    queryFn: () => {
      if (!state) {
        return null;
      }
      return axios.get(`/api/opioid-prescription-rate?state=${state}`);
    }
  });
};
