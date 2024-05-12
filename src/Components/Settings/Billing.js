import React, { useState } from 'react';

const Billing = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handlePayment = () => {
    // Handle payment logic based on the selected option
    console.log(`Payment method selected: ${selectedOption}`);
    alert(`Payment method selected: ${selectedOption}`);
  };

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-semibold mb-5">Select Payment Method</h1>
      <div className="flex flex-col space-y-4">
        <div className="flex items-center">
          <input
            type="radio"
            id="mpesa"
            name="paymentOption"
            value="Mpesa"
            checked={selectedOption === 'Mpesa'}
            onChange={handleOptionChange}
          />
          <label htmlFor="mpesa" className="ml-2 text-lg">
            Mpesa
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="radio"
            id="paypal"
            name="paymentOption"
            value="PayPal"
            checked={selectedOption === 'PayPal'}
            onChange={handleOptionChange}
          />
          <label htmlFor="paypal" className="ml-2 text-lg">
            PayPal
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="radio"
            id="mastercard"
            name="paymentOption"
            value="Mastercard"
            checked={selectedOption === 'Mastercard'}
            onChange={handleOptionChange}
          />
          <label htmlFor="mastercard" className="ml-2 text-lg">
            Mastercard
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="radio"
            id="visa"
            name="paymentOption"
            value="Visa"
            checked={selectedOption === 'Visa'}
            onChange={handleOptionChange}
          />
          <label htmlFor="visa" className="ml-2 text-lg">
            Visa
          </label>
        </div>
      </div>
      <button
        onClick={handlePayment}
        className="bg-indigo-500 text-white px-4 py-2 mt-6 rounded-md hover:bg-indigo-600 transition duration-300"
      >
        Proceed to Payment
      </button>
    </div>
  );
};

export default Billing;
