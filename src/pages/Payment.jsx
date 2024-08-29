import { useState } from 'react';
import { Stepper } from '@/components/Stepper';
import Mask8 from '@/assets/masks/Mask_8.png';
import OptionIcon from '@/assets/optionIcon.png';
import CalendarIcon from '@/assets/calendar_icon_white.png';
import MasterCardLogo from '@/assets/master-card.png';
import PaypalLogo from '@/assets/paypal.png';
import AmexLogo from '@/assets/amex.png';
import VisaCardLogo from '@/assets/visa-card.png';
import Stripe from '@/assets/stripe.png';
import Wallet from '@/assets/Wallet.png';
import Paid from '@/assets/paid.png';
import CheckedSmall from '@/assets/checked_small.png'
import { PaymentCard } from '../components/PaymentCard';
import { CurrencyDropdown } from '../components/CurrencyDropDown';
import DatePicker from 'react-datepicker';
import { format } from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';
import '../tailwind-datepicker.css';

const payments = [VisaCardLogo, AmexLogo, PaypalLogo, MasterCardLogo, ]

export const Payment = () => {
  const [errors, setErrors] = useState({});
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const formattedDate = selectedDate ? format(selectedDate, 'MMMM') : '';
  
  return (
    <div className="">
      <div 
        className={`absolute top-0 right-0 w-full h-screen z-0 max-w-full flex justify-end`}
      >
        <img
          src={Mask8}
          alt="mask_8"
          className='h-full'
        />
      </div>
      <div className='absolute top-0 left-0 z-1 w-full flex justify-between'>
        <div className="min-w-[522px] max-w-[522px] w-[522px] ml-[155px] mt-[72px]" >
          <div className='px-[27px]'>
            <Stepper completedSteps={['signup', 'pricing', 'payment']} />
            <p className='mt-[72px] text-[42px] leading-[46.2px] -tracking-[1.68px]'>Payment method</p>
            <p className='mt-5 leading-6 text-[#FFFFFF99]'>Connect your Stripe account for payments</p>
            <div className='flex gap-[14px] mt-9'>
              {
                payments.map((logo, index) => (
                  <PaymentCard
                    key={index.toString()}
                    logo={logo}
                  />
                ))
              }
            </div>
          </div>
          <form className='mt-20 px-[27px]'>
            <div className='mb-6'>
              <label
                htmlFor="company-name"
                className="block mb-1 text-sm font-medium text-white leading-[23.8px]"
              >
                Card number*
              </label>
              <input
                id="card-number" 
                className={`bg-[#2424244D] border rounded-12 text-[#FFFFFF99] text-sm leading-24 block w-full px-5 py-[11px] ${errors?.companyName ? "border-red-600" : "border-[#fffffa33]"}`}
                placeholder="Enter your card number"
                required
              />
              {
                errors?.cardNumber && (
                  <p className="mt-1 text-sm text-red-600 leading-[23.8px]">
                    {errors.cardNumber}
                  </p>
                )
              }
            </div>
            <div className='flex gap-3'>
              <div className='mb-6 w-full'>
                <label
                  htmlFor="company-name"
                  className="block mb-1 text-sm font-medium text-white leading-[23.8px]"
                >
                  Expiration date*
                </label>
                <input
                  id="expiration-date" 
                  className={`bg-[#2424244D] border rounded-12 text-[#FFFFFF99] text-sm leading-24 block w-full px-5 py-[11px] ${errors?.companyName ? "border-red-600" : "border-[#fffffa33]"}`}
                  placeholder="Enter your expiration date"
                  required
                />
                {
                  errors?.expirationDate && (
                    <p className="mt-1 text-sm text-red-600 leading-[23.8px]">
                      {errors.expirationDate}
                    </p>
                  )
                }
              </div>
              <div className='mb-6 w-full'>
                <label
                  htmlFor="cvv"
                  className="block mb-1 text-sm font-medium text-white leading-[23.8px]"
                >
                  CVV*
                </label>
                <input
                  id="cvv" 
                  className={`bg-[#2424244D] border rounded-12 text-[#FFFFFF99] text-sm leading-24 block w-full px-5 py-[11px] ${errors?.companyName ? "border-red-600" : "border-[#fffffa33]"}`}
                  placeholder="Enter your CVV"
                  required
                />
                {
                  errors?.cvv && (
                    <p className="mt-1 text-sm text-red-600 leading-[23.8px]">
                      {errors.cvv}
                    </p>
                  )
                }
              </div>
            </div>
            <div className='mb-9'>
              <label
                htmlFor="country-region"
                className="block mb-1 text-sm font-medium text-white leading-[23.8px]"
              >
                Country / region
              </label>
              <input
                id="country-region" 
                className={`bg-[#2424244D] border rounded-12 text-[#FFFFFF99] text-sm leading-24 block w-full px-5 py-[11px] ${errors?.email ? "border-red-600" : "border-[#fffffa33]"}`}
                placeholder="Enter your country / region"
                required
              />
              {
                errors?.countryRegion && (
                  <p className="mt-1 text-sm text-red-600 leading-[23.8px]">
                    {errors.countryRegion}
                  </p>
                )
              }
            </div>
            <button
              type='submit'
              className='w-full h-8 bg-green-200 rounded-[100px]'
            >
              <span className='uppercase text-xs text-[#090909] font-semibold -tracking-[0.6px]'>connect to stripe</span>
            </button>
          </form>
          <div className='flex items-center justify-center mt-3 px-[27px]'>
            <button
              type='submit'
              className='border-b border-[#767676]'
            >
              <span className='text-xs text-[#767676] font-semibold -tracking-[0.6px]'>Skip</span>
            </button>
          </div>
        </div>
        <div className="w-[358px] mr-[93px] mt-[186px]">
          <div
            className="w-full h-[220px] px-5 pt-5 rounded-[12px] border border-[#FFFFFF99] bg-[#1E1E1EA3] backdrop-blur-[20px]"
          >
            <div className='flex justify-between'>
              <p className='text-xl leading-[22px] font-medium'>Pay via Stripe</p>
              <button
                className='w-5 h-5 flex items-center justify-center'
                onClick={() => {}}
              >
                <img
                  className='w-5 h-5'
                  src={OptionIcon}
                  alt='option-icon'
                />
              </button>
            </div>
            <div className='bg-[#ffffff0d] h-[78px] flex items-center justify-between rounded-6 mt-6 px-4'>
              <div className='flex gap-[16px]'>
                <div className='w-[52px] h-[52px] min-w-[52px] max-w-[52px] rounded-full bg-white flex items-center justify-center'>
                  <img src={Stripe} alt="Stripe" className='w-[32px] h-[13px]' />
                </div>
                <div className='flex flex-col justify-center'>
                  <p className='text-lx font-medium'>$300</p>
                  <p className='text-[#ffffff66] text-xs'>Total amount</p>
                </div>
              </div>
              <CurrencyDropdown />
            </div>
            <button
              className='w-full mt-[14PX] px-4 py-3 flex items-center justify-center bg-green-200 rounded-[100px]'
            >
              <span className='text-xs text-[#090909] leading-normal font-semibold uppercase tracking-0.6'>MAKE PAYMENT</span>
            </button>
          </div>
          <div
            className="w-full h-auto mt-[14px] px-5 pt-5 pb-4 rounded-[12px] border border-[#FFFFFF99] bg-[#1E1E1EA3] backdrop-blur-[20px]"
          >
            <div className='flex gap-[16px]'>
              <div className='w-[51px] h-[51px] min-w-[51px] max-w-[51px] rounded-[7px] bg-white flex items-center justify-center'>
                <img src={Wallet} alt="Wallet" className='w-7 h-7' />
              </div>
              <div className='flex flex-col justify-center'>
                <p className='text-lg font-medium'>Payment processing</p>
                <div className='flex'>
                  <img src={Paid} alt="Paid" className='w-4 h-4'/>
                  <p className='text-[#CDFF05] ml-2 text-xs'>One-off Instant Payment</p>
                </div>
              </div>
            </div>
            <div className="relative mt-[14px]">
              <DatePicker
                selected={selectedDate}
                className="w-full h-[50px] px-4 pl-[20px] pr-8 bg-transparent border border-[#56586833] rounded-6 text-white"
                onChange={handleDateChange}
                dateFormat="MMMM"
                showMonthYearPicker
                placeholderText="Select a month"
                customInput={<CustomInput value={formattedDate} />}
              />
              <img
                src={CalendarIcon}
                alt="CalendarIcon"
                className='w-5 h-5 absolute inset-y-[15px] right-[11px] flex items-center pointer-events-none'
              />
            </div>
          </div>
          <div
            className="flex items-center gap-3 w-full h-auto mt-[14px] p-4 rounded-[12px] border border-[#FFFFFF99] bg-[#1E1E1EA3]"
          >
            <div className='w-[23px] h-[23px] rounded-full flex items-center justify-center bg-white'>
              <img src={CheckedSmall} className='w-full h-full'/>
            </div>
            <div className='flex flex-col justify-center'>
              <p className='text-lg font-medium'>Payment recieved</p>
            </div>            
          </div>
        </div>
      </div>
    </div>
  )
};


const CustomInput = ({ value, onClick }) => (
  <button 
    className="w-full h-[50px] px-4 pl-[20px] text-left pr-8 bg-transparent border border-[#56586833] rounded-6 text-white"
    onClick={onClick}
  >
    {value || 'Select a month'}
  </button>
);
