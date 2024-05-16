// useAuthenticate.js
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const useAuthenticate = () => {
  const { authType, phoneNumber, nationalId, setVerified, setError } = useContext(AuthContext);

  const authenticate = async () => {
    try {
      if (authType === 'register') {
        const response = await fetch('http://3.127.183.100:8087/api/v1/patient', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ nationalId, phoneNumber }),
        });
        const data = await response.json();

        if (response.ok) {
          const otpChannelResponse = await fetch('http://3.127.183.100:8087/api/v1/send-otp-channel', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              nationalId: data.nationalId,
            }),
          });
          if (otpChannelResponse.ok) {
            console.log('Authentication successful');
            setVerified(true);
          } else {
            console.log('Failed to send OTP channel');
          }
        } else {
          const errorData = await response.json();
          setError(errorData.error);
          console.log('Failed to authenticate:', errorData.error);
        }
      } else if (authType === 'login') {
        const otpChannelResponse = await fetch('http://3.127.183.100:8087/api/v1/send-otp-channel', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            nationalId,
            channel: "sms"
          }),
        });
        if (otpChannelResponse.ok) {
          console.log('Authentication successful');
          setVerified(true);
        } else {
          console.log('Failed to send OTP channel');
        }
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return { authenticate };
};

export default useAuthenticate;
