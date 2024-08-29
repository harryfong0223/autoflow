import Mask10 from '@/assets/masks/Mask_10.png';
import OptionIcon from '@/assets/optionIcon.png';
import Avatar from '@/assets/Avatar.png';
import BarChart from '@/assets/bar_chart.png';
import Leaf from '@/assets/Leaf.png';
import Speedometer from '@/assets/Speedometer.png';
import ShieldCheck from '@/assets/ShieldCheck.png';
import ArrowOutward from '@/assets/arrow_outward.png';
import CheckedSmall from '@/assets/checked_small.png'
import CheckCircle from '@/assets/CheckCircle.png'
import { Link } from 'react-router-dom';


export const AccountActive = () => {

  
  return (
    <div className="">
      <div 
        className={`absolute top-0 right-0 w-full h-screen z-0 max-w-full flex justify-end`}
      >
        <img
          src={Mask10}
          alt="mask_10"
          className='h-full'
        />
      </div>
      <div className='absolute top-0 left-0 z-1 w-full flex justify-between items-center'>
        <div className="min-w-[325px] max-w-[325px] w-[325px] ml-[155px] mt-[72px]" >
          <div className=''>
            <img
              src={CheckCircle}
              alt='CheckCircle'
              className='w-20 h-20'
            />
            <p className='mt-9 text-[42px] leading-[46.2px] -tracking-[1.68px]'>Account Active</p>
            <p className='mt-5 leading-6 text-[#FFFFFF99]'>You’ve activated your account and you’re ready to to use it!</p>
          </div>
          <button
            className='w-[292px] h-8 mt-[60px] bg-green-200 rounded-[100px]'
          >
            <span className='uppercase text-xs text-[#090909] font-semibold -tracking-[0.6px]'>Go to dashboard</span>
          </button>
        </div>
        <div className="w-[358px] mr-[93px] mt-[163px]">
          <div className="w-full px-[24px] pt-5 pb-8 rounded-[12px] border border-[#FFFFFF99] bg-[#1E1E1EA3] backdrop-blur-[20px]">
            <div className='flex justify-between'>
              <p className='text-xl leading-[22px] font-medium'>Account Created</p>
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
            <div className='flex gap-[16px] mt-6'>
              <div className='w-[60px] h-[60px] min-w-[60px] max-w-[60px] rounded-full flex items-center justify-center'>
                <img src={Avatar} alt="Stripe" className='w-full h-full' />
              </div>
              <div className='flex flex-col justify-center'>
                <p className='text-lg font-medium'>Joseph Lee</p>
                <div className='w-[85px] h-[21px] bg-[#cdff051a] rounded-[60px] px-1 flex items-center gap-1 '>
                  <div className='w-[16px] h-[16px] rounded-full flex items-center justify-center bg-white'>
                    <img src={CheckedSmall} className='w-full h-full'/>
                  </div>
                  <p className='text-green-200 text-xs font-medium uppercase'>Verified</p>
                </div>
              </div>
            </div>
            <div className='flex items-center gap-2 mt-[18px]'>
              <img src={BarChart} alt="BarChart" className='w-5 h-5' />
              <p className='text-[#ffffff99]'>Key Metrics</p>
            </div>
            <div className='flex items-center mt-4'>
              <div className='w-[34px] h-[34px] min-w-[34px] max-w-[34px] flex items-center justify-center bg-green-200 rounded-full mr-3'>
                <img src={Speedometer} alt="Speedometer" className='w-4 h-4' />
              </div>
              <div>
                <div className='w-[107px] h-[6px] bg-white rounded-[3.5px] mb-[2px]'></div>
                <p className='text-sm text-[#ffffff99] font-medium leading-20'>Avg. age of vehicles in fleet</p>
              </div>
            </div>
            <div className='w-full h-px my-[14px] bg-[#ffffff33]'></div>
            <div className='flex items-center'>
              <div className='w-[34px] h-[34px] min-w-[34px] max-w-[34px] flex items-center justify-center bg-green-200 rounded-full mr-3'>
                <img src={Leaf} alt="Leaf" className='w-4 h-4' />
              </div>
              <div>
                <div className='w-[68px] h-[6px] bg-white rounded-[3.5px] mb-[2px]'></div>
                <p className='text-sm text-[#ffffff99] font-medium leading-20'>Total fuel costs for the fleet </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-3 w-full h-auto mt-[14px] px-[24px] py-5 rounded-[12px] border border-[#FFFFFF99] bg-[#1E1E1EA3]">
            <img src={ShieldCheck} alt="ShieldCheck" className='w-[26px] h-[26px]'/>
            <p className='text-[#ffffff99]'>Subscription</p>
            <div className='flex items-center justify-between'>
              <p className='text-[26px] font-medium'>Tier 2 Plan</p>
              <Link
                to='/pricing'
              >
                <img src={ArrowOutward} alt='ArrowOutward' className='w-6 h-6 '/>
              </Link>
            </div>            
          </div>
        </div>
      </div>
    </div>
  )
};

