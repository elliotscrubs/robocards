import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  console.log(users);

  const fetchUserData = () => {
    fetch('https://random-data-api.com/api/users/random_user?size=8')
      .then(response => {
        return response.json();
      })
      .then(data => {
        setUsers(data);
      });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div>
      <button className='button' onClick={() => window.location.reload()}>
        Fetch now
      </button>
      <div className='container'>
        {users.map(user => (
          <div key={user.id} className='flip-card'>
            <div className='flip-card-inner'>
              <div className='flip-card-front'>
                <h2>
                  {user.first_name} {user.last_name}
                </h2>
                <h4>{user.employment.title}</h4>
                <img src={user.avatar} alt='avatar' />
              </div>
              <div className='flip-card-back'>
                <h1>More information here</h1>
                <h2>{user.email}</h2>
                <h2>{user.phone_number}</h2>
                <h2>{user.date_of_birth}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
