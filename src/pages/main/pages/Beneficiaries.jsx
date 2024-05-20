import React, { useState, useEffect, useRef } from "react";
import { FaBell } from "react-icons/fa";
import ProfileImg from "../../../assets/ladydoll.jpeg";

const Beneficiaries = () => {
  const [clickedIndex, setClickedIndex] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [newBeneficiary, setNewBeneficiary] = useState({ name: "", phone: "" });
  const [showPinConfirmation, setShowPinConfirmation] = useState(false);
  const [pinConfirmed, setPinConfirmed] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        setShowForm(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const data = [
    { name: "Tim Mwaniki", phone: "0700123456" },
    { name: "Duncan Osoro", phone: "011987654" },
    { name: "Elizabeth Ojiambo", phone: "0712456789" },
    { name: "Fulgence Ondoro", phone: "0700123456" },
    { name: "Regina Kirima", phone: "0712456789" },
    { name: "Patrick Mahomes", phone: "0700123456" },
  ];

  const handleClick = (index) => {
    setClickedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleAddBeneficiary = () => {
    setShowForm(true);
    setShowPinConfirmation(false); // Hide pin confirmation if it's showing
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewBeneficiary((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPinConfirmation(true);
  };

  const handlePinConfirm = () => {
    setPinConfirmed(true);
    setShowPinConfirmation(false);
    // Handle form submission logic here
    console.log("New Beneficiary:", newBeneficiary);
    // Reset the form fields
    setNewBeneficiary({ name: "", phone: "" });
    // Hide the form
    setShowForm(false);
  };

  const handlePinCancel = () => {
    setShowPinConfirmation(false);
  };

  return (
    <div className="mx-8">
      <div className="flex flex-col w-[320px] h-[416px] space-y-3 mt-12">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col bg-white p-2 rounded-lg">
            <div onClick={() => handleClick(index)}>
              <h1>{item.name}</h1>
              <h1>{item.phone}</h1>
            </div>

            {clickedIndex === index && (
              <div className="w-full h-[62px] border-t-2 text-xs pt-1">
                <h1>Enter Amount</h1>
                <div className="space-x-1 relative">
                  <input
                    type="number"
                    placeholder="Enter Amount"
                    className="pl-2 text-xl text-white w-[240px] h-[42px] bg-custom-pastel rounded-lg border"
                  />
                  <button
                    className="absolute bottom-0.5 bg-custom-green p-2 rounded-lg h-10 font-bold text-custom-dark-green text-lg"
                    onClick={() => setShowPinConfirmation(true)}
                  >
                    SEND
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <div>
        <button
          className="bg-custom-green text-custom-dark-green font-bold w-[320px] h-[44px] rounded-lg absolute bottom-28"
          onClick={handleAddBeneficiary}
        >
          ADD BENEFICIARY
        </button>
      </div>
      {showForm && (
        <>
          <div className="absolute inset-0 bg-black opacity-50"></div>

          <div
            ref={formRef}
            className="w-80 absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 bg-custom-dark-green p-4 rounded-lg"
          >
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Enter Name"
                value={newBeneficiary.name}
                onChange={handleChange}
                className="border rounded-lg p-2 w-full mb-2"
              />
              <input
                type="text"
                name="phone"
                placeholder="Enter Phone Number"
                value={newBeneficiary.phone}
                onChange={handleChange}
                className="border rounded-lg p-2 w-full mb-2"
              />
              <button
                type="submit"
                className="w-full bg-custom-green text-custom-dark-green font-bold rounded-lg p-2 px-4"
              >
                Submit
              </button>
            </form>
          </div>
        </>
      )}
      {showPinConfirmation && (
        <>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="w-80 absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-lg">
            <p>Please confirm your PIN:</p>
            <input type="text" className="border rounded-lg p-2 w-full mb-2" />
            <button
              onClick={handlePinConfirm}
              className="bg-custom-green text-custom-dark-green font-bold rounded-lg p-2 px-4 mr-2"
            >
              Confirm
            </button>
            <button
              onClick={handlePinCancel}
              className="bg-custom-pastel text-white font-bold rounded-lg p-2 px-4"
            >
              Cancel
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Beneficiaries;
