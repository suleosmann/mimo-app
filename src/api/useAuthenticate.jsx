import { useAuthStore } from '../stores/useAuthStore';
import { useUserStore } from '../stores/useUserStore'; // Import useUserStore
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import db from '../db.json'; // Import the JSON data

const useAuthenticate = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const {
    authType,
    phoneNumber,
    nationalId,
    setAuthDone,
    otpCode,
    pinCode,
    setVerified,
    pin,
    setOpenPin,
    setAuthType,
    setError
  } = useAuthStore();

  const { setUser } = useUserStore();

  const register = async (nationalId, phoneNumber) => {
    try {
      const newUser = {
        id: String(db.users.length + 1),
        nationalId,
        phoneNumber,
        otp: '12345', // You might want to generate this dynamically
        pin: null
      };
      db.users.push(newUser);
      console.log('Registration successful');
      setVerified(true);
    } catch (error) {
      setError(error.message);
      console.log('Failed to register:', error.message);
    }
  };

  const verifyOtp = async (nationalId, phoneNumber, otpCode) => {
    try {
      const user = db.users.find(user => user.nationalId === nationalId && user.phoneNumber === phoneNumber);

      if (user && user.otp === otpCode.join('')) {
        console.log('OTP verification successful');
        setOpenPin(true);
      } else {
        setError('Invalid OTP');
        console.log('Failed to verify OTP: Invalid OTP');
      }
    } catch (error) {
      setError(error.message);
      console.log('Failed to verify OTP:', error.message);
    }
  };

  const createPin = async (nationalId, pinCode) => {
    try {
      const userIndex = db.users.findIndex(user => user.nationalId === nationalId);

      if (userIndex !== -1) {
        db.users[userIndex].pin = pinCode;
        console.log('Pin set successfully');
        setAuthType('login');
        setVerified(false);
        // Optional: Navigate to login screen
        // navigate('/login');
      } else {
        setError('User not found');
        console.log('Failed to set pin: User not found');
      }
    } catch (error) {
      setError(error.message);
      console.log('Failed to set pin:', error.message);
    }
  };

  const login = async (nationalId, pin) => {
  try {
    const user = db.users.find(user => user.nationalId === nationalId);
    const hardcodedPin = '1111'; // Hardcoded PIN

    setAuthType('login');
    console.log(pin);

    if (user && pin === hardcodedPin) {
      setUser(user); // Capture user info in user store
      setAuthDone(true);
      console.log('Authentication successful');
      navigate('/main'); // Redirect to /main on successful login
    } else {
      setError('Invalid credentials');
      console.log('Failed to authenticate: Invalid credentials');
    }
  } catch (error) {
    setError(error.message);
    console.log('Failed to authenticate:', error.message);
  }
};


  const authenticate = async () => {
    try {
      if (authType === 'register') {
        await register(nationalId, phoneNumber);
      } else if (authType === 'login') {
        await login(nationalId, pin);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return { authenticate, verifyOtp, createPin };
};

export default useAuthenticate;
