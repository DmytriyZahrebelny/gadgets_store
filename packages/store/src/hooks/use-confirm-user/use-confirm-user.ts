import { useQuery } from '@apollo/client';

import QueryMe from '../../graphql/Me.query.gql';

export type MeQuery = {
  me?: { __typename?: 'User'; _id: string; email: string; name: string } | undefined;
};

export const useConfirmUser = () => {
  const { loading, data } = useQuery<MeQuery>(QueryMe);

  return {
    loading,
    isAuthorized: Boolean(data?.me),
  };
};
