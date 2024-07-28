import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [view, setView] = useState('Register');
  const [formData, setFormData] = useState({
    uname: '',
    uemail: '',
    uphone: '',
    upassword: '',
    index: ''
  });
  const [showUser, setShowUser] = useState({});
  const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('userData')) || []);

  const contextValues = {
    view,
    setView,
    formData,
    setFormData,
    showUser,
    setShowUser,
    userData,
    setUserData
  };

  return (
    <UserContext.Provider value={contextValues}>
      {children}
    </UserContext.Provider>
  );
};
