import { useQuery } from '@apollo/client';

import GadgetsQuery from '../../graphql/Gadgets.query.gql';
import { GadgetsQueryType } from '../../types/queries-types';

export const useGadgetsList = () => {
  const { data, loading } = useQuery<GadgetsQueryType>(GadgetsQuery);

  return {
    loading,
    gadgets: data?.products || [],
  };
};
