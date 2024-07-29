import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { toast } from 'react-toastify';
import '../styles/FormStyles.css';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const { formData, setFormData, userData, setUserData, setView } = useContext(UserContext);

  const getValue = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const { uname, uemail, uphone, upassword } = formData;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;
    if (uname.trim().length < 2) return 'Username must be at least 2 characters long.';
    if (!emailRegex.test(uemail)) return 'Invalid email format.';
    if (!phoneRegex.test(uphone)) return 'Phone number must be 10 digits.';
    if (upassword.length < 6) return 'Password must be at least 6 characters long.';
    return null;
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const error = validateForm();
    if (error) {
      toast.error(error);
      return;
    }

    const { uname, uemail, uphone, upassword, index } = formData;
    const newUserData = { uname, uemail, uphone, upassword };
    if (index === '') {
      const emailExists = userData.some((user) => user.uemail === uemail);
      const phoneExists = userData.some((user) => user.uphone === uphone);
      const userExists = userData.some((user) => user.uname === uname);
      if (emailExists || phoneExists || userExists) {
        toast.error('Name, Email, or phone number already exists.');
        return;
      }
      const updatedUserData = [...userData, newUserData];
      setUserData(updatedUserData);
      localStorage.setItem('userData', JSON.stringify(updatedUserData));
      toast.success('Registration successful!');
    } else {
      const emailExists = userData.some((user, idx) => user.uemail === uemail && idx !== Number(index));
      const phoneExists = userData.some((user, idx) => user.uphone === uphone && idx !== Number(index));
      if (emailExists || phoneExists) {
        toast.error('Email or phone number already exists.');
        return;
      }
      const updatedUserData = userData.map((user, idx) =>
        idx === Number(index) ? newUserData : user
      );
      setUserData(updatedUserData);
      localStorage.setItem('userData', JSON.stringify(updatedUserData));
      toast.success('Update successful!');
    }
    setFormData({ uname: '', uemail: '', uphone: '', upassword: '', index: '' });
    setView('login');
  };

  return (
    <form onSubmit={handleFormSubmit} className="form-container">
      <h2>Register</h2>
      <div>
        <label>Name :</label>
        <input type="text" value={formData.uname} onChange={getValue} name='uname' required />
      </div>
      <div>
        <label>Email :</label>
        <input type="email" value={formData.uemail} onChange={getValue} name='uemail' required />
      </div>
      <div>
        <label>Phone :</label>
        <input type="text" value={formData.uphone} onChange={getValue} name='uphone' required />
      </div>
      <div>
        <label>Password :</label>
        <input type="password" value={formData.upassword} onChange={getValue} name='upassword' required />
      </div>
      <button type="submit">Save</button>
      <button type="button" onClick={() => setView('login')}>Back to Login</button>
    </form>
  );
};

export default Register;
