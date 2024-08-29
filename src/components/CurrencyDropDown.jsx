import React, { useState } from 'react';
import USDFlag from '@/assets/flag-usd.png'

const currencies = [
  { code: 'USD', name: 'United States Dollar', flag: '🇺🇸' },
  { code: 'EUR', name: 'Euro', flag: '🇪🇺' },
  { code: 'JPY', name: 'Japanese Yen', flag: '🇯🇵' },
];

export const CurrencyDropdown = () => {
  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleCurrencySelect = (currency) => {
    setSelectedCurrency(currency);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        className="inline-flex items-center justify-between w-full pl-4 pr-1 py-2 text-sm font-medium text-white bg-transparent"
        aria-expanded={isOpen}
        aria-haspopup="true"
        onClick={toggleDropdown}
      >
        <div className='w-5 h-5 rounded-full flex justify-center items-center mr-2'>
          <img src={USDFlag} alt="USDFlag" className='w-full h-full'/>
        </div>
        <p>{selectedCurrency.code}</p>
        <svg
          className="w-5 h-5 ml-1 -mr-1 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.292 7.292a1 1 0 011.414 0L10 10.586l3.293-3.294a1 1 0 011.414 1.415l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.415z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {
        isOpen && (
          <div className="absolute right-0 z-10 w-56 mt-2 origin-top-right bg-white border border-gray-200 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              {currencies.map((currency) => (
                <button
                  key={currency.code}
                  className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                  onClick={() => handleCurrencySelect(currency)}
                >
                  <span className="mr-2">{currency.flag}</span>
                  {currency.code} - {currency.name}
                </button>
              ))}
            </div>
          </div>
        )
      }
    </div>
  );
};

