import { useQuery } from '@apollo/client';

import QueryMe from './graphql/Me.query.gql';

export const useConfirmUser = () => {
  const { loading, data } = useQuery(QueryMe);
  console.log(data);
  return {
    loading,
    isAuthorized: Boolean(data?.me),
  };
};
