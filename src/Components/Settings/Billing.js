import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
    
    console.log({ selectedOption, cardNumber });
    alert('Billing information submitted successfully!');
  };

  return (
    <div className="bg-black rounded-lg p-6 w-full pt-10 justify-center min-h-[60vh]">
      <h1 className="font-bold text-lg lg:text-xl mb-8 lg:mb-10 uppercase text-white text-center ">Billing Information</h1>
      <form onSubmit={handleSubmit} className="max-w-md lg:max-w-lg mx-auto justify-center">
        <div className="mb-4">
          <label htmlFor="paymentOption" className="block text-sm font-medium  text-white">
            Select Payment Option
          </label>
          <select
            id="paymentOption"
            name="paymentOption"
            value={selectedOption}
            onChange={handleOptionChange}
            className="mt-1 p-2 block w-full border-gray-600 rounded-md focus:border-teal-500"
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
            <label htmlFor="cardNumber" className="block text-sm font-medium text-white">
              Enter Card Number
            </label>
            <input
              type="tel"
              id="cardNumber"
              name="cardNumber"
              value={cardNumber}
              onChange={handleCardNumberChange}
              placeholder="Enter card number"
              className="mt-1 p-2 block w-full border-gray-600 rounded-md focus:border-teal-500"
            />
          </div>
        )}
        <div className="flex justify-center flex-wrap gap-2 pt-2">
          <button
            type="submit"
            className="bg-teal-500 hover:bg-teal-600 text-white px-5 py-1.5 rounded-md transition text-sm"
          >
            Submit
          </button>
          <Link to="/settings">
            <button
              type="button"
              className="px-4 py-1.5 text-sm text-white/80 hover:text-white border border-white/30 rounded-md hover:bg-white/5 transition"
            >
              Cancel
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Billing;
