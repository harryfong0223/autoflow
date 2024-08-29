
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Stepper } from '@/components/Stepper';
import Mask7 from '@/assets/masks/Mask_7.png';
import VisibilityOff from '@/assets/visibility_off.png';
import GoogleIcon from '@/assets/googleIcon.png';
import AppleIcon from '@/assets/appleIcon.png';
import OptionIcon from '@/assets/optionIcon.png';
import CarIcon from '@/assets/CarIcon.png';
import UserIcon from '@/assets/UserIcon.png';
import Logo4 from '@/assets/logo_4.png';
import CheckedIcon from '@/assets/checkedIcon.png';

export const SignUp = () => {
  const [errors, setErrors] = useState({});

  return (
    <div className="">
      <div 
        className={`absolute top-0 right-0 w-full h-screen z-0 max-w-full flex justify-end`}
      >
        <img
          src={Mask7}
          alt="mask_7"
          className='h-full'
        />
      </div>
      <div className='absolute top-0 left-0 z-1 w-full flex justify-between'>
        <div className="min-w-[522px] max-w-[522px] w-[522px] ml-[155px] mt-[72px]" >
          <div className='px-[27px]'>
            <Stepper />
            <p className='mt-[72px] text-[42px] leading-[46.2px] -tracking-[1.68px]'>Signup</p>
            <p className='mt-5 leading-6 text-[#FFFFFF99]'>Create your account today to start your autoflow journey</p>
          </div>
          <form className='mt-8 pt-2 px-[27px]'>
            <div className='mb-6'>
              <label
                htmlFor="company-name"
                className="block mb-1 text-sm font-medium text-white leading-[23.8px]"
              >
                Company name*
              </label>
              <input
                id="company-name" 
                className={`bg-[#2424244D] border rounded-12 text-[#FFFFFF99] text-sm leading-24 block w-full px-5 py-[10px] ${errors?.companyName ? "border-red-600" : "border-[#fffffa33]"}`}
                placeholder="Enter your company name"
                required
              />
              {
                errors?.companyName && (
                  <p className="mt-1 text-sm text-red-600 leading-[23.8px]">
                    {errors.companyName}
                  </p>
                )
              }
            </div>
            <div className='mb-6'>
              <label
                htmlFor="email"
                className="block mb-1 text-sm font-medium text-white leading-[23.8px]"
              >
                Email*
              </label>
              <input
                id="email" 
                className={`bg-[#2424244D] border rounded-12 text-[#FFFFFF99] text-sm leading-24 block w-full px-5 py-[10px] ${errors?.email ? "border-red-600" : "border-[#fffffa33]"}`}
                placeholder="Enter your email"
                required
              />
              {
                errors?.email && (
                  <p className="mt-1 text-sm text-red-600 leading-[23.8px]">
                    {errors.email}
                  </p>
                )
              }
            </div>
            <div className='mb-6'>
              <label
                htmlFor="password"
                className="block mb-1 text-sm font-medium text-white leading-[23.8px]"
              >
                Password*
              </label>
              <div className="relative">
                <input
                  id="password" 
                  className={`bg-[#2424244D] border rounded-12 text-[#FFFFFF99] text-sm leading-24 block w-full px-5 py-[10px] ${errors?.password ? "border-red-600" : "border-[#fffffa33]"}`}
                  placeholder="Set a password"
                  required
                />
                <div
                  role='presentation'
                  className="absolute inset-y-0 end-0 flex items-center pe-3.5 cursor-pointer"
                >
                  <img
                    src={VisibilityOff}
                    className='w-5 h-5'
                  />
                </div>
              </div>
              {
                errors?.password && (
                  <p className="mt-1 text-sm text-red-600 leading-[23.8px]">
                    {errors.password}
                  </p>
                )
              }
            </div>
            <button
              type='submit'
              className='w-full h-8 bg-green-200 rounded-[100px]'
            >
              <span className='uppercase text-xs text-[#090909] font-semibold -tracking-[0.6px]'>create account</span>
            </button>
          </form>
          <div className='flex items-center justify-center mt-6 mb-8 px-[27px]'>
            <p className='text-[#828597] text-sm font-normal leading-[23.8px]'>Already have an account? 
              <Link
                to='/'
                className='text-green-200 ml-1'
              >
                Login instead
              </Link>
            </p>
          </div>
          <div className='flex items-center justify-between'>
            <div className='w-full h-px bg-custom-gradient-r-to-l opacity-40'></div>
            <p className='text-sm font-medium text-[#FFFFFF99] px-3 leading-[23.8px]'>OR</p>
            <div className='w-full h-px bg-custom-gradient-l-to-r opacity-40'></div>
          </div>
          <div className='flex justify-between gap-2 px-[27px] mt-8'>
            <button
              className='border border-[#FFFFFF99] rounded-6 w-full py-[14px] flex items-center justify-center gap-[10px]'
              onClick={() => {}}
            >
              <img
                src={GoogleIcon}
                className='w-5 h-5'
                alt='GoogleIcon'
              />
              <span className='text-xs font-medium leading-[20px]'>Sign in with Google</span>
            </button>
            <button
              className='border border-[#FFFFFF99] rounded-6 w-full py-[14px] flex items-center justify-center gap-[10px]'
              onClick={() => {}}
            >
              <img
                src={AppleIcon}
                className='w-5 h-5'
                alt='AppleIcon'
              />
              <span className='text-xs font-medium leading-[20px]'>Sign in with Apple</span>
            </button>
          </div>
        </div> 
        <div
          className="w-[358px] h-[488px] mr-[93px] mt-[186px] px-5 pt-5 rounded-[12px] border border-[#FFFFFF99] bg-[#1E1E1EA3] backdrop-blur-[20px]"
        >
          <div className='flex justify-between'>
            <p className='text-xl leading-[22px] font-medium'>Account sign up</p>
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
          <div className='mt-6'>
            <div className='flex'>
              <div className='w-12 h-12 mr-4 rounded-full bg-green-200 flex items-center justify-center'>
                <img
                  className='w-5 h-5'
                  src={CarIcon}
                  alt='car-icon'
                />
              </div>
              <div className='gap-0'>
                <span className='block text-base font-medium leading-[27px]'>Vehicle Listings</span>
                <span className='block text-xs text-[#FFFFFF99] leading-16'>Clients upload their vehicles</span>
              </div>
            </div>
            <div className='ml-6 h-[68px] border-l border-dashed flex items-center'>
              <div className='w-[42px] border-t border-dashed'></div>
              <div className='flex items-center justify-center border rounded-[13.5px] px-3 py-2'>
                <img 
                  className='w-[81px] h-[10px]'
                  src={Logo4}
                  alt='logo'
                />
              </div>
            </div>
            <div className='flex'>
              <div className='w-12 h-12 mr-4 rounded-full bg-green-200 flex items-center justify-center'>
                <img
                  className='w-5 h-5'
                  src={UserIcon}
                  alt='user-icon'
                />
              </div>
              <div className='gap-0'>
                <span className='block text-base font-medium leading-[27px]'>Vehicle bookings</span>
                <span className='block text-xs text-[#FFFFFF99] leading-16'>Customers book the vehicles</span>
              </div>
            </div>
          </div>
          <div className='mt-5 '>
            <p className='mb-3 text-green-200 text-lg leading-[23px] font-medium'>Unlock Benefits</p>
            
            <div className='flex items-center mb-4'>
              <img
                className='w-5 h-5'
                src={CheckedIcon}
                alt='checked-icon'
              />
              <span className='block ml-3 text-base font-medium leading-[20px]'>Booking Calendars</span>
            </div>
            <div className='flex items-center mb-4'>
              <img
                className='w-5 h-5'
                src={CheckedIcon}
                alt='checked-icon'
              />
              <span className='block ml-3 text-base font-medium leading-[20px]'>Fleet Management</span>
            </div>
            <div className='flex items-center mb-4'>
              <img
                className='w-5 h-5'
                src={CheckedIcon}
                alt='checked-icon'
              />
              <span className='block ml-3 text-base font-medium leading-[20px]'>Accept Payments</span>
            </div>
          </div>
          <button
            className='w-full mt-9 px-4 py-3 flex items-center justify-center bg-green-200 rounded-[100px]'
          >
            <span className='text-xs text-[#090909] leading-normal font-semibold uppercase tracking-0.6'>Sign up now</span>
          </button>
        </div> 
      </div>
    </div>
  )
};
