import React from 'react';
import {useQuery, gql} from '@apollo/client'

function App() {
  const {loading, data } = useQuery(gql`
    query{
      login(input: {email: "test_1@mail.com", password: "1234"}) {
        name
        _id
        email
      }
    }
  `) 
 
  if (loading) {
    return <div>Loading...</div>
  }
console.log(data);
  return (
    <div className="App">
      data
    </div>
  );
}

export default App;
