import { useAuthStore } from '../stores/useAuthStore';

const useAuthenticate = () => {
  const { authType, phoneNumber, nationalId, otpCode, pinCode, setVerified, setError, pin, setOpenPin, setNationalId, setPhoneNumber, setPinCode, setOtpCode, setPin, setAuthType } = useAuthStore();

  const register = async (nationalId, phoneNumber) => {
    const response = await fetch('http://3.127.183.100:8087/api/v1/patient', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nationalId, phoneNumber }),
    });
    const data = await response.json();

    if (response.ok) {
      console.log(data);
      console.log('Authentication successful');
      setVerified(true);
    } else {
      setError(data.error);
      console.log('Failed to authenticate:', data.error);
    }
  };

  const verifyOtp = async (nationalId, phoneNumber, otpCode) => {
    const response = await fetch('http://3.127.183.100:8087/api/v1/patient/validate-phone-number', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nationalId, phone: phoneNumber, otp: otpCode.join('') }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      console.log('OTP verification successful');
      setOpenPin(true);
    } else {
      const errorData = await response.json();
      setError(errorData.error);
      console.log('Failed to verify OTP:', errorData.error);
    }
  };

  const createPin = async (nationalId, pinCode) => {
    const response = await fetch('http://3.127.183.100:8087/api/v1/set-new-pin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nationalId, pin: pinCode.join('') }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      console.log('Pin set successfully');
      setVerified(true);
    } else {
      const errorData = await response.json();
      setError(errorData.error);
      console.log('Failed to set pin:', errorData.error);
    }
  };

  const login = async (nationalId, pin) => {
    const response = await fetch('http://3.127.183.100:8087/api/v1/log-in', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nationalId, pin }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      console.log('Authentication successful');
      setVerified(true);
    } else {
      const errorData = await response.json();
      setError(errorData.error);
      console.log('Failed to authenticate:', errorData.error);
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
