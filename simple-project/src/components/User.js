import {useState} from 'react';

const User = (props) => {
    const [userName, setUserName] = useState('');
    const [userAge, setUserAge] = useState('');

    const usernameChange = (e) => {
        setUserName(e.target.value);
    }

    const ageChange = (e) => {
        setUserAge(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();

        if(userName.trim().length === 0 || userAge.trim().length === 0){
            alert('Please enter a valid name and age (non-empty values)');
            return;
        }

        if(userAge < 1){
            alert('Please enter a valid age (>0)');
            return;
        }

        const userDetails = {
            id: Math.random().toString(),
            username: userName,
            age: userAge
        }
        props.addUserDetails(userDetails);

        setUserName('');
        setUserAge('');
    }

  return (
    <div>
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" value={userName} onChange={usernameChange} />
            </div>
            <div>
                <label htmlFor="age">Age (Years)</label>
                <input type="number" id="age" value={userAge} onChange={ageChange} />
            </div>
            <button type="submit">Add User</button>
        </form>
    </div>
  )
}

export default User