import { useQuery } from '@apollo/client';

import QueryGadgets from '../../graphql/Gadgets.query.gql';
import { GadgetsQuery } from './gadgets-list.type';

export const useGadgetsList = () => {
  const { data, loading } = useQuery<GadgetsQuery>(QueryGadgets);

  return {
    loading,
    gadgets: data?.products || [],
  };
};
