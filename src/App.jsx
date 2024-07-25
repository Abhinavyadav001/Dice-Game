import { useState } from 'react';
import FirstPage from './components/FirstPage';
import Playgame from './components/Playgame';

function App() {
  const [clickplay, setClickplay] = useState(false);

  const gameplay = () => {
    setClickplay(prev => !prev);
  };

  return (
    <>
      {clickplay ? <Playgame /> : <FirstPage toggle={gameplay} />}
    </>
  );
}

export default App;
