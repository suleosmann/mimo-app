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
    setError,
    pin,
    setOpenPin,
    setNationalId,
    setPhoneNumber,
    setPinCode,
    setOtpCode,
    setPin,
    setAuthType
  } = useAuthStore();

  const { setUser } = useUserStore();

  const register = async (nationalId, phoneNumber) => {
    try {
      const response = await fetch('http://localhost:8087/users', {
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
      console.log('Registration successful');
      setVerified(true);
    } catch (error) {
      setError(error.message);
      console.log('Failed to register:', error.message);
    }
  };

  const verifyOtp = async (nationalId, phoneNumber, otpCode) => {
    try {
      const response = await fetch(`http://localhost:8087/users?nationalId=${nationalId}&phoneNumber=${phoneNumber}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (!response.ok) {
        const errorData = await response.text();
        throw new Error(errorData);
      }

      const users = await response.json();
      if (users.length > 0 && users[0].otp === otpCode.join('')) {
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
      const response = await fetch(`http://localhost:8087/users?nationalId=${nationalId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (!response.ok) {
        const errorData = await response.text();
        throw new Error(errorData);
      }

      const users = await response.json();
      if (users.length > 0) {
        const user = users[0];
        const updateResponse = await fetch(`http://localhost:8087/users/${user.id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ pin: pinCode.join('') }),
        });

        if (!updateResponse.ok) {
          const errorData = await updateResponse.text();
          throw new Error(errorData);
        }

        const data = await updateResponse.json();
        console.log(data);
        console.log('Pin set successfully');
        setAuthType('login');
        setVerified(false);
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
      const response = await fetch(`http://localhost:8087/users?nationalId=${nationalId}&pin=${pin}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (!response.ok) {
        const errorData = await response.text();
        throw new Error(errorData);
      }

      const users = await response.json();
      if (users.length > 0) {
        const user = users[0];
        console.log(user);
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
