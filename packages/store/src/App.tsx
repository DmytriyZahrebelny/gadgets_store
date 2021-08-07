import React from 'react';
import {useQuery} from '@apollo/client'

import Login from './Login.gql';

function App() {
  const {loading, data } = useQuery(Login) 
 
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
