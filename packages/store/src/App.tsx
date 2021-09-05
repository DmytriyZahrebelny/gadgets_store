import { Spin } from './components/spin';

import { Authorization } from './features/authorization';
import { useConfirmUser } from './hooks/useConfirmUser';

function App() {
  const { loading } = useConfirmUser();

  if (loading) {
    return <Spin />;
  }

  return <Authorization />;
}

export default App;
