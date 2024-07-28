import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import deleteData from '../helpers/delete';
import editRow from '../helpers/edit';
import '../styles/UserCardStyles.css';

const UserDetails = () => {
  const { showUser, userData, setFormData, setUserData, setView } = useContext(UserContext);

  const handleEdit = () => {
    const index = userData.indexOf(showUser);
    editRow(index, userData, setFormData);
    setView('Register');
  };

  const handleDelete = () => {
    const index = userData.indexOf(showUser);
    deleteData(index, userData, setUserData);
    localStorage.setItem('userData', JSON.stringify(userData.filter((_, i) => i !== index)));
    setView('Register');
  };

  return (
    <div className="user-card">
      <h2>{showUser.uname}</h2>
      <p>Email: {showUser.uemail}</p>
      <p>Phone: {showUser.uphone}</p>
      <p>Password: {showUser.upassword}</p>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={() => setView('login')}>Back to Login</button>
    </div>
  );
};

export default UserDetails;
