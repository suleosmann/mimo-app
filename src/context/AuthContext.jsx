import React, { createContext, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [authType, setAuthType] = useState('login');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [nationalId, setNationalId] = useState('');
const [verified, setVerified] = useState(false)
const [error, setError] = useState("")

  return (
    <AuthContext.Provider
      value={{ authType, setAuthType, phoneNumber, setPhoneNumber, nationalId, setNationalId, verified, setVerified, error, setError }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
