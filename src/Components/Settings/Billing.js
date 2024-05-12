

import React, { useState } from 'react';

const Billing = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [cardNumber, setCardNumber] = useState('');

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleCardNumberChange = (e) => {
    setCardNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the submission, e.g., send data to backend or perform validation
    console.log({ selectedOption, cardNumber });
    alert('Billing information submitted successfully!');
  };

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-semibold mb-5">Billing Information</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="paymentOption" className="block text-sm font-medium text-gray-700">
            Select Payment Option
          </label>
          <select
            id="paymentOption"
            name="paymentOption"
            value={selectedOption}
            onChange={handleOptionChange}
            className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">Select Payment Option</option>
            <option value="mpesa">Mpesa</option>
            <option value="paypal">PayPal</option>
            <option value="mastercard">Mastercard</option>
            <option value="visa">Visa</option>
          </select>
        </div>
        {selectedOption && (
          <div className="mb-4">
            <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">
              Enter Card Number
            </label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              value={cardNumber}
              onChange={handleCardNumberChange}
              placeholder="Enter card number"
              className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        )}
        <button
          type="submit"
          className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Billing;
