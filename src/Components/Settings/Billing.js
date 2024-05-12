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
    // Here you can handle the submission, e.g., send data to backend or perform validation
    console.log({ selectedOption, cardNumber });
    alert('Billing information submitted successfully!');
  };

  return (
    <div className="container mx-auto mt-10 h-96 bg-black rounded-lg text-white ">
      <h1 className="text-3xl font-semibold mb-5 mt-5">Billing Information</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="paymentOption" className="block text-sm font-medium  text-white">
            Select Payment Option
          </label>
          <select
            id="paymentOption"
            name="paymentOption"
            value={selectedOption}
            onChange={handleOptionChange}
            className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-s text-black"
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
              className=" text-black mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        )}
        <button
          type="submit"
          className=" text-white px-4 py-2 rounded-md transition ease-in-out hover:-translate-y-1 hover:scale-110  duration-300"
        >
          Submit
        </button>
        <Link to="/settings">
                <button
                  type="button"
                  className="btn-default ml-2 text-white transition ease-in-out hover:-translate-y-1 hover:scale-110  duration-300"
                >
                  Cancel
                </button>
              </Link>
      </form>
    </div>
  );
};

export default Billing;
