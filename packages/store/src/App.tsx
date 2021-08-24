import { useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/client';

import LoginQuery from './Login.query.gql';
import LoginMutation from './Login.mutation.gql';
import { LoginMutation as Test, LoginMutationVariables } from './generated/ApolloComponents';

function App() {
  const { loading, data } = useQuery(LoginQuery);
  const [login] = useMutation<Test, LoginMutationVariables>(LoginMutation);

  useEffect(() => {
    login({ variables: { input: { email: 'test_1@mail.com', password: '1234' } } });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  console.log(data);
  return <div className="App">data</div>;
}

export default App;
