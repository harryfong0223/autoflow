
import { SectionTitle } from './SectionTitle';
import CheckSmall from '../assets/check_small.png'
import CalendarIcon from '../assets/calendar_icon.png'
import BoatIcon from '../assets/Boat.png'
import Graphics from '../assets/graphics.png'
import Car from '../assets/car.png'
import Beenhere from '../assets/beenhere.png'
import CarIcon from '../assets/CarIcon.png'
import AirplaneIcon from '../assets/AirplaneIcon.png'

export const Banner = () => {
  return (
    <div className="w-full h-full flex justify-center gap-34">
      <div className='w-629 pt-80 pr-62'>
        <SectionTitle text="// welcome to autoflow" />
        <div className='w-full mt-8'>
          <p className='font-medium text-8xl leading-82 -tracking-5'>
            Cruise control for your fleet.
          </p>
        </div>
        <div className='w-full flex gap-10 mt-56'>
          <button
            type="button" 
            className="uppercase text-black-200 bg-green-200 text-xs font-semibold rounded-full leading-8 px-4 py-3 text-center"
          >
            14 days free trial
          </button>
          <button
            type="button"
            style={{boxSizing: 'border-box'}}
            className="uppercase box-border text-white border-2 text-xs font-semibold rounded-full leading-8 px-4 py-10 text-center"
          >
            view features
          </button>
        </div>
        <div className='w-full flex gap-24 mt-154'>
          <div className='flex items-center gap-10'>
            <div className='w-7 h-7 rounded-full flex items-center justify-center bg-green-200'>
              <img src={CheckSmall} className='w-7 h-7'/>
            </div>
            <span className='font-medium text-20 leading-14 -tracking-1.5'>Take Payments</span>
          </div>
          <div className='flex items-center gap-10'>
            <div className='w-7 h-7 rounded-full flex items-center justify-center bg-green-200'>
              <img src={CheckSmall} className='w-7 h-7'/>
            </div>
            <span className='font-medium text-20 leading-14 -tracking-1.5'>E-Signatures</span>
          </div>
          <div className='flex items-center gap-10'>
            <div className='w-7 h-7 rounded-full flex items-center justify-center bg-green-200'>
              <img src={CheckSmall} className='w-7 h-7'/>
            </div>
            <span className='font-medium text-20 leading-14 -tracking-1.5'>Fleet Management</span>
          </div>
        </div>
      </div>
      <div className='relative w-629 h-567'>
        <div className='absolute top-0 right-45 bg-green-200 rounded-10 w-316 h-404'>
          <div className='relative pt-22 pl-30 pr-22 pb-31'>
            <div className='flex justify-between items-center '>
              <div className='flex items-center gap-7'>
                <img src={CalendarIcon} className="w-4 h-4" />
                <span className='text-black text-xs'>Total sales</span>
              </div>
              <select
                value='june_2024'
                name="date"
                className='border bg-green-200 text-black text-xs pl-15 border-black rounded-17 w-95 h-22'
                onChange={() => {}}
              >
                <option value="june_2024">June 2024</option>
              </select>
            </div>
            <div className='mt-3'>
              <p className='text-black text-5xl leading-28'>1,289</p>
            </div>
            <div className='absolute top-68 -right-45 bg-white w-172 h-12 p-1 flex items-center rounded-6 gap-10'>
              <div className='w-10 h-10 bg-green-200 rounded-4 flex justify-center items-center'>
                <img src={BoatIcon} alt='boat' className='w-5 h-5'/>
              </div>
              <p className='text-lg leading-13 text-black font-medium'>Watercraft</p>
            </div>
            <div className='mt-43'>
              <img 
                src={Graphics}
              />
            </div>
          </div>
          <div>
          </div>
        </div>
        <div className='absolute top-216 right-263 bg-black-300 border rounded-12 w-325 h-351 p-4'>
          <div className='relative'>
            <div>
              <img
                src={Car}
                alt='car'
                className='w-full h-148'
              />
            </div>
            <div className='flex justify-between items-center mt-29 px-2'>
              <p className='text-2xl font-medium leading-17'>AVIS XL Car</p>
              <img
                src={Beenhere}
                alt='Beenhere'
                className='w-6 h-6'
              />
            </div>
            <div className='flex items-center justify-between mt-4 pl-2'>
              <div className='w-1/3 py-6'>
                <p className='text-xs leading-8 text-gray-100 mb-14'>Top Speed</p>
                <p className='text-base leading-11 text-white'>140Km/h</p>
              </div>
              <div className='w-1/3 border-l border-gray-100 pl-14 py-6'>
                <p className='text-xs leading-8 text-gray-100 mb-14'>Power</p>
                <p className='text-base leading-11 text-white'>1200CC</p>
              </div>
              <div className='w-1/3 border-l border-gray-100 pl-14 py-6'>
                <p className='text-xs leading-8 text-gray-100 mb-14'>Cylinders</p>
                <p className='text-base leading-11 text-white'>4</p>
              </div>
            </div>
            <div className='w-full mt-25'>
              <button
                className='w-full h-8 bg-green-200 rounded-full flex items-center justify-center'
              >
                <p className='capitalize text-black text-xs leading-8'>book now</p>
              </button>
            </div>
            <div className='absolute top-68 -left-58 bg-white w-142 h-12 p-1 flex items-center rounded-6 gap-10'>
              <div className='w-10 h-10 bg-green-200 rounded-4 flex justify-center items-center'>
                <img src={CarIcon} alt='CarIcon' className='w-5 h-5'/>
              </div>
              <p className='text-lg leading-13 text-black font-medium'>Cars</p>
            </div>
            <div className='absolute top-217 -right-104 bg-white w-142 h-12 p-1 flex items-center rounded-6 gap-10'>
              <div className='w-10 h-10 bg-green-200 rounded-4 flex justify-center items-center'>
                <img src={AirplaneIcon} alt='AirplaneIcon' className='w-5 h-5'/>
              </div>
              <p className='text-lg leading-13 text-black font-medium'>Jets</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
