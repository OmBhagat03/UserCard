import React, { useState, useContext } from 'react';
import { UserContext } from '../context/UserContext';
import '../styles/FormStyles.css';

function Login() {
  const { setView, userData, setShowUser } = useContext(UserContext);
  const [uname, setUsername] = useState('');
  const [upassword, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = userData.find((v) => v.uname === uname && v.upassword === upassword);
    if (user) {
      setShowUser(user);
      setView('UserDetails');
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2>Login</h2>
      <div>
        <label>Username: </label>
        <input type="text" value={uname} onChange={(e) => setUsername(e.target.value)} required />
      </div>
      <div>
        <label>Password: </label>
        <input type="password" value={upassword} onChange={(e) => setPassword(e.target.value)} required />
      </div>
      <button type="submit">Login</button>
      <button type="button" onClick={() => setView('Register')}>Register</button>
    </form>
  );
}

export default Login;
