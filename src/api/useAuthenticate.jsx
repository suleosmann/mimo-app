import { useAuthStore } from '../stores/useAuthStore';
import { useUserStore } from '../stores/useUserStore'; // Import useUserStore
import { useNavigate } from 'react-router-dom'; // Import useNavigate

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

  const { user, setUser } = useUserStore();

  const register = async (nationalId, phoneNumber) => {
    try {
      const response = await fetch('http://3.127.183.100:8087/api/v1/patient', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nationalId, phoneNumber }),
      });

      if (!response.ok) {
        const errorData = await response.text();
        throw new Error(errorData);
      }

      const data = await response.json();
      console.log(data);
      setUser(data);
      console.log(user)
      console.log('Registration successful');
      setVerified(true);
    } catch (error) {
      setError(error.message);
      console.log('Failed to register:', error.message);
    }
  };

  const verifyOtp = async (nationalId, phoneNumber, otpCode) => {
    try {
      const response = await fetch('http://3.127.183.100:8087/api/v1/patient/validate-phone-number', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nationalId, phone: phoneNumber, otp: otpCode.join('') }),
      });

      if (!response.ok) {
        const errorData = await response.text();
        throw new Error(errorData);
      }

      const data = await response.json();
      console.log(data);
      console.log('OTP verification successful');
      setOpenPin(true);
    } catch (error) {
      setError(error.message);
      console.log('Failed to verify OTP:', error.message);
    }
  };

  const createPin = async (nationalId, pinCode) => {
    try {
      const response = await fetch('http://3.127.183.100:8087/api/v1/set-new-pin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nationalId, pin: pinCode.join('') }),
      });

      if (!response.ok) {
        const errorData = await response.text();
        throw new Error(errorData);
      }

      const data = await response.json();
      console.log(data);
      console.log('Pin set successfully');
      setAuthType('login');
      setVerified(false);
    } catch (error) {
      setError(error.message);
      console.log('Failed to set pin:', error.message);
    }
  };

  const login = async (nationalId, pin) => {
    try {
      const response = await fetch('http://3.127.183.100:8087/api/v1/log-in', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nationalId, pin }),
      });

      if (!response.ok) {
        const errorData = await response.text();
        throw new Error(errorData);
      }

      const data = await response.json();
      console.log(data);
      setUser(data); // Capture user info in user store
      setAuthDone(true);
      console.log('Authentication successful');
      navigate('/main'); // Redirect to /main on successful login
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
