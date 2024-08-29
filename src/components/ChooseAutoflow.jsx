import React, { useState } from 'react';
import { SectionTitle } from './SectionTitle';
import Payment from '../assets/payment.png'
import BabyIcon from '../assets/babyIcon.png'
import RoadIcon from '../assets/roadIcon.png'

export const ChooseAutoflow = () => {
  const [isOn1, setIsOn1] = useState(true);
  const [isOn2, setIsOn2] = useState(false);

  return (
    <div className="max-w-1248 mx-auto w-full h-full mt-35 flex justify-between pt-72">
      <div className='max-w-438'>
        <div className=' mt-61'>
          <div className='w-367'>
            <SectionTitle text="// why choose autoflow" />
            <p className='mt-32 text-6xl leading-51 -tracking-3'>
              Setup, sit back and relax
            </p>
          </div>
          <div className='mt-77'>
            <div className='mb-42'>
              <div className='flex items-center'>
                <div className='mr-6 bg-green-200 rounded-full w-40 h-30 flex items-center justify-center'>
                  <span className='text-black text-sm leading-10'>01</span>
                </div>
                <p className='text-2xl leading-17 text-white'>
                  Integrated e-commerce
                </p>
              </div>
              <div className='mt-6'>
                <p className='text-gray-110 leading-19'>
                  Your customers can easily checkout & pay for their rental vehicle and add convenient trip extras such as additional miles or child safety seat.
                </p>
              </div>
            </div>
            <div className='w-full h-px bg-gradient-to-r from-white to-white-0 '></div>
            <div className='my-42'>
              <div className='flex items-center'>
                <div className='mr-6 bg-green-200 rounded-full w-40 h-30 flex items-center justify-center'>
                  <span className='text-black text-sm leading-10'>02</span>
                </div>
                <p className='text-2xl leading-17 text-white -tracking-1.5'>
                  Integrate Stripe to take payments
                </p>
              </div>
            </div>
            <div className='w-full h-px bg-gradient-to-r from-white to-white-0 '></div>
            <div className='my-42'>
              <div className='flex items-center'>
                <div className='mr-6 bg-green-200 rounded-full w-40 h-30 flex items-center justify-center'>
                  <span className='text-black text-sm leading-10'>03</span>
                </div>
                <p className='text-2xl leading-17 text-white'>
                  E-Sign Agreements
                </p>
              </div>
            </div>
            <div className='w-full h-px bg-gradient-to-r from-white to-white-0 '></div>
            <div className='mt-42'>
              <div className='flex items-center'>
                <div className='mr-6 bg-green-200 rounded-full w-40 h-30 flex items-center justify-center'>
                  <span className='text-black text-sm leading-10'>04</span>
                </div>
                <p className='text-2xl leading-17 text-white'>
                  Car, Watercraft & more
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex items-end justify-end pr-52'>
        <div className='w-557 h-auto bg-black-400 rounded-12 border border-gray-120 ' >
          <div className='w-full px-60 py-69'>
            <img
              src={Payment}
              className='w-full h-full'
            />
          </div>
          <div className='px-8'>
            <p className=''>Extras</p>
            <div className='mt-8 mb-5 flex items-center justify-between'>
              <div className='flex items-center'>
                <div className='w-12 h-12 rounded-full bg-gray-130 flex items-center justify-center'>
                  <img
                    src={BabyIcon}
                    alt="Baby Icon"
                    className='w-25 h-25'
                  />
                </div>
                <div className='ml-14'>
                  <p className='mb-3 text-white text-lg leading-13'>Child safety seat</p>
                  <p className='text-gray-140 text-xs leading-8'>Activate on arrival</p>
                </div>
              </div>
              <div>
              <div
                className={`w-11 h-6 flex items-center rounded-full p-1 cursor-pointer ${
                  isOn1 ? 'bg-green-200' : 'bg-gray-150'
                }`}
                onClick={() => setIsOn1(!isOn1)}
              >
                <div
                  className={`w-4 h-4 rounded-full shadow-md transform transition-transform ${
                   isOn1 ? 'bg-black translate-x-5' : 'bg-white translate-x-0'
                  }`}
                />
              </div>
              </div>
            </div>
            <div className='w-full h-px bg-gray-160'></div>
            <div className='mt-8 mb-5 flex items-center justify-between'>
              <div className='flex items-center'>
                <div className='w-12 h-12 rounded-full bg-gray-130 flex items-center justify-center'>
                  <img
                    src={RoadIcon}
                    alt="Road Icon"
                    className='w-25 h-25'
                  />
                </div>
                <div className='ml-14'>
                  <p className='mb-3 text-white text-lg leading-13'>Additional miles</p>
                  <p className='text-gray-140 text-xs leading-8'>Calculate on arrival</p>
                </div>
              </div>
              <div>
              <div
                className={`w-11 h-6 flex items-center rounded-full p-1 cursor-pointer ${
                  isOn2 ? 'bg-green-200' : 'bg-gray-150'
                }`}
                onClick={() => setIsOn2(!isOn2)}
              >
                <div
                  className={`w-4 h-4 rounded-full shadow-md transform transition-transform ${
                    isOn2 ? 'bg-black translate-x-5' : 'bg-white translate-x-0'
                  }`}
                />
              </div>
              </div>
            </div>
          </div>
          <div className='w-full mt-66 px-5 pb-5'>
            <button
              className='w-full h-51 bg-green-200 rounded-full flex items-center justify-center'
            >
              <p className='capitalize text-black text-xs leading-8'>I HAVE READ THE AGREEMENT</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
