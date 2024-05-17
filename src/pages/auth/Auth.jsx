import MiMo_logo from "../../assets/MiMo_logo.png";
import ladydoll from "../../assets/ladydoll.jpeg";
import WhiteShirtMan from "../../assets/whiteshirtmale.jpeg";
import useAuthenticate from "../../api/useAuthenticate";
import { useAuthStore } from "../../stores/useAuthStore";
const Auth = () => {
  const {
    authType,
    setAuthType,
    phoneNumber,
    setPhoneNumber,
    nationalId,
    setNationalId,
    verified,
    setVerified,
    pin,
    setPin,
    otpCode,
    setOtpCode,
    openPin,
    pinCode,
    setPinCode,
  } = useAuthStore();

  const handleAuthType = (type) => {
    setAuthType(type);
  };

  const { authenticate } = useAuthenticate();
  

  const handleOtpInputChange = (index, value) => {
    const newOtpCode = [...otpCode];
    newOtpCode[index] = value;
    setOtpCode(newOtpCode);
  };
  
  const handlePinChange = (index, value) => {
    const newPinCode = [...pinCode];
    newPinCode[index] = value;
    setPinCode(newPinCode);
  };
  

  const handleVerifyClick = () => {
    setOtpCode(["", "", "", "", ""]);
    setVerified(false);
  };

  const handlePinConfirmClick = () => {
    // Add your logic here to handle pin confirmation
    console.log("Pin confirmed!");
  };


  return (
    <div
      className="h-screen bg-cover bg-center font-montserrat"
      style={{ backgroundImage: `url(${WhiteShirtMan})` }}
    >
      <div className="flex flex-col h-full bg-white bg-opacity-65 text-white">
        <img
          src={MiMo_logo}
          alt="logo"
          className="absolute top-16 w-20 right-6"
        />
        <div className="absolute left-[48px] top-[189px] bg-custom-dark-green border rounded-lg bg-opacity-90 w-[295px] min-h-[358px] overflow-y-auto">
          <div className="flex justify-center mt-4">
            <img
              src={ladydoll}
              className=" border-2 border-custom-green w-[73px] h-[73px] rounded-full"
            />
          </div>
          <div className=" text-center mt-4 space-x-8 text-sm font-bold bg-custom-pastel h-[55] w-[255] mx-2 p-2 rounded-lg">
            <button
              className={`uppercase py-1.5 px-5 text-white ${
                authType === "register"
                  ? "rounded-lg border-2 border-custom-green bg-custom-dark-green text-white font-semibold"
                  : "text-custom-dark-green"
              }`}
              onClick={() => handleAuthType("register")}
            >
              Register
            </button>
            <button
              className={`uppercase py-1.5 px-5 text-white  ${
                authType === "login"
                  ? "rounded-lg border-2 border-custom-green bg-custom-dark-green text-white font-semibold"
                  : "text-custom-dark-green"
              }`}
              onClick={() => handleAuthType("login")}
            >
              Login
            </button>
          </div>
          <div>
            {authType === "register" && verified === false && (
              <div className="flex flex-col gap-1 w-[275px] h-[60px] ml-2 mt-6">
                <label className="text-sm">Enter Nation Id number</label>

                <input
                  type="number"
                  value={nationalId}
                  onChange={(e) => setNationalId(e.target.value)}
                  className="bg-custom-pastel rounded-lg px-3 py-1.5 w-full"
                />

                <label className="text-sm">Enter Phone Number</label>

                <input
                  type="number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className=" bg-custom-pastel  rounded-lg px-3  py-1.5 w-full"
                />
              </div>
            )}
            {authType === "login" && verified === false && (
              <div className="flex flex-col gap-1 w-[275px] h-[60px] ml-2 mt-6">
                <label className="text-sm">Enter National Id Number</label>

                <input
                  type="number"
                  value={nationalId}
                  onChange={(e) => setNationalId(e.target.value)}
                  className=" bg-custom-pastel  rounded-lg px-3  py-1.5 w-full"
                />
                <label className="text-sm">Enter your Pin</label>

                <input
                  type="number"
                  value={pin}
                  onChange={(e) => setPin(e.target.value)}
                  className=" bg-custom-pastel  rounded-lg px-3  py-1.5 w-full"
                />
                <p className="text-xs	 text-center mt-2">
                  Please enter your ID and Pin to Login
                </p>
              </div>
            )}
          </div>
          {verified && !openPin && (
      <div className=" ml-3 mt-4">
        <h1 className="text-lg">Verification Code</h1>
        <p className="text-sm pr-2 mt-3">
          Please enter the 5-digit verification code sent to your phone
          number & email
        </p>
        <div className="mt-6 flex space-x-2">
          <input
            type="text"
            value={otpCode[0]}
            maxLength="1"
            onChange={(e) => handleOtpInputChange(0, e.target.value)}
            className="bg-custom-pastel bg-opacity-60 border-2 border-custom-green border-dotted rounded-lg w-[47px] h-[40px] text-white font-bold text-3xl text-center"
            placeholder="_"
          />
          <input
            type="text"
            value={otpCode[1]}
            maxLength="1"
            onChange={(e) => handleOtpInputChange(1, e.target.value)}
            className="bg-custom-pastel bg-opacity-60 border-2 border-custom-green border-dotted rounded-lg w-[47px] h-[40px] text-white font-bold text-3xl text-center"
            placeholder="_"
          />
          <input
            type="text"
            value={otpCode[2]}
            maxLength="1"
            onChange={(e) => handleOtpInputChange(2, e.target.value)}
            className="bg-custom-pastel bg-opacity-60 border-2 border-custom-green border-dotted rounded-lg w-[47px] h-[40px] text-white font-bold text-3xl text-center"
            placeholder="_"
          />
          <input
            type="text"
            value={otpCode[3]}
            maxLength="1"
            onChange={(e) => handleOtpInputChange(3, e.target.value)}
            className="bg-custom-pastel bg-opacity-60 border-2 border-custom-green border-dotted rounded-lg w-[47px] h-[40px] text-white font-bold text-3xl text-center"
            placeholder="_"
          />
          <input
            type="text"
            value={otpCode[4]}
            maxLength="1"
            onChange={(e) => handleOtpInputChange(4, e.target.value)}
            className="bg-custom-pastel bg-opacity-60 border-2 border-custom-green border-dotted rounded-lg w-[47px] h-[40px] text-white font-bold text-3xl text-center"
            placeholder="_"
          />
        </div>
      </div>
    )}
    {verified && openPin && (
      <div className=" mt-4">
        <h1 className="text-xl font-bold text-center mr-2">
          Create a new Pin
        </h1>

        <div className="mt-6 ml-8 flex space-x-2">
          <input
            type="text"
            maxLength="1"
            value={pinCode[0]}
            onChange={(e) => handlePinChange(0, e.target.value)}
            className="bg-custom-pastel bg-opacity-60 border-2 border-custom-green border-dotted rounded-lg w-[47px] h-[40px] text-white font-bold text-3xl text-center"
            placeholder="_"
          />
          <input
            type="text"
            maxLength="1"
            value={pinCode[1]}
            onChange={(e) => handlePinChange(1, e.target.value)}
            className="bg-custom-pastel bg-opacity-60 border-2 border-custom-green border-dotted rounded-lg w-[47px] h-[40px] text-white font-bold text-3xl text-center"
            placeholder="_"
          />
          <input
            type="text"
            maxLength="1"
            value={pinCode[2]}
            onChange={(e) => handlePinChange(2, e.target.value)}
            className="bg-custom-pastel bg-opacity-60 border-2 border-custom-green border-dotted rounded-lg w-[47px] h-[40px] text-white font-bold text-3xl text-center"
            placeholder="_"
          />
          <input
            type="text"
            maxLength="1"
            value={pinCode[3]}
            onChange={(e) => handlePinChange(3, e.target.value)}
            className="bg-custom-pastel bg-opacity-60 border-2 border-custom-green border-dotted rounded-lg w-[47px] h-[40px] text-white font-bold text-3xl text-center"
            placeholder="_"
          />
        </div>
        <h1 className="text-sm mt-4 text-center">
          Didn't receive code?{" "}
          <span className="text-custom-green">Resend</span>
        </h1>
      </div>
    )}
        </div>

        <div>
          <button
            onClick={
              verified
                ? openPin
                  ? handlePinConfirmClick
                  : handleVerifyClick
                : authenticate
            }
            className="absolute top-[688px] left-[48px] text-base text-custom-dark-green font-semibold bg-custom-green w-[295px] h-[40px] rounded-lg"
          >
            {verified ? (openPin ? "CONFIRM" : "VERIFY") : "SEND OTP"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
