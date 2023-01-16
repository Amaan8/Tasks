import {useState} from 'react';
import User from './components/User';
import UserDetails from './components/UserDetails';
import './App.css';

function App() {
  const [user, setUser] = useState([]);
  
  const addUserDetails = (userDetails) => {
    setUser((prevState) => {
      return [...prevState, userDetails];
    });
  }

  return (
    <div className="App">
      <User addUserDetails={addUserDetails} />
      <UserDetails userDetails={user} />
    </div>
  );
}

export default App;
