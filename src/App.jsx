import { LoginForm } from './components/Login-form-view';
import { Home } from './components/Home-view';
import { useState } from 'react';
import './App.css';

function App() {

  const [superu, setSuperu] = useState([]);

  return (
    <>
      <div>
        {
          !superu.length > 0
            ? <LoginForm setSuperu={setSuperu} />
            : <Home superu={superu} setSuperu={setSuperu}/>
        }
      </div>
    </>
  )
}

export default App
