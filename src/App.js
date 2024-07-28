import React from 'react';
import { UserProvider, UserContext } from './context/UserContext';
import Register from './components/Register';
import Login from './components/Login';
import UserDetails from './components/UserDetails';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles/App.css';

const AppContent = () => {
  const { view } = React.useContext(UserContext);

  return (
    <>
      {view === 'Register' && <Register />}
      {view === 'login' && <Login />}
      {view === 'UserDetails' && <UserDetails />}
    </>
  );
};

function App() {
  return (
    <UserProvider>
      <div className="App">
        <header className="App-header">
          <AppContent />
        </header>
        <ToastContainer />
      </div>
    </UserProvider>
  );
}

export default App;
