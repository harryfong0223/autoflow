import { Stepper } from '@/components/Stepper';
import OptionIcon from '@/assets/optionIcon.png';
import LogoLetter from '@/assets/logo_letter.png';
import CheckedSmall from '@/assets/checked_small.png'
import Mask9 from '@/assets/masks/Mask_9.png';


export const Activation = () => {
  
  return (
    <div className="">
      <div 
        className={`absolute top-0 right-0 w-full h-screen z-0 max-w-full flex justify-end`}
      >
        <img
          src={Mask9}
          alt="mask_9"
          className='h-full'
        />
      </div>
      <div className='absolute top-0 left-0 z-1 w-full flex justify-between'>
        <div className="min-w-[422px] max-w-[422px] w-[422px] ml-[155px] mt-[72px]" >
          <div className='px-[27px]'>
            <Stepper completedSteps={['signup', 'pricing', 'payment', 'activation']} />
            <p className='mt-[72px] text-[42px] leading-[46.2px] -tracking-[1.68px]'>Account Activation</p>
            <p className='mt-5 leading-6 text-[#FFFFFF99]'>We’ve sent you a confirmation code via email. Please enter it below</p>
          </div>
          <form className='mt-20 px-[27px]'>
            <div>
              <div className='flex gap-[17px] mt-[48px] mb-8'>
                <input
                  id="card-1" 
                  className={`bg-black text-white text-center border border-[#56586833] focus:border-[#CDFF05] focus:outline-none focus-visible:border-[#CDFF05] rounded-6 text-[#FFFFFF99] text-6xl leading-24 block w-[78px] h-[86px] p-4`}
                  required
                  maxLength={1}
                />
                <input
                  id="card-2" 
                  className={`bg-black text-white text-center border border-[#56586833] focus:border-[#CDFF05] focus:outline-none focus-visible:border-[#CDFF05] rounded-6 text-[#FFFFFF99] text-6xl leading-24 block w-[78px] h-[86px] p-4`}
                  required
                  maxLength={1}
                />
                <input
                  id="card-3" 
                  className={`bg-black text-white text-center border border-[#56586833] focus:border-[#CDFF05] focus:outline-none focus-visible:border-[#CDFF05] rounded-6 text-[#FFFFFF99] text-6xl leading-24 block w-[78px] h-[86px] p-4`}
                  required
                  maxLength={1}
                />
                <input
                  id="card-4" 
                  className={`bg-black text-white text-center border border-[#56586833] focus:border-[#CDFF05] focus:outline-none focus-visible:border-[#CDFF05] rounded-6 text-[#FFFFFF99] text-6xl leading-24 block w-[78px] h-[86px] p-4`}
                  required
                  maxLength={1}
                />
              </div>
              <div>
                <span className='text-xs text-[#828597] font-medium'>Didn’t receive the code? </span>
                <button
                  className='text-xs text-green-200 font-medium'
                  onClick={(e) => {
                    e.preventDefault()
                  }}
                >Send via SMS</button>
              </div>
            </div>
            <button
              type='submit'
              className='w-full h-8 bg-green-200 rounded-[100px] mt-9'
            >
              <span className='uppercase text-xs text-[#090909] font-semibold -tracking-[0.6px]'>Verify code</span>
            </button>
          </form>
        </div>
        <div className="w-[358px] mr-[93px] mt-[166px]">
          <div className="w-full px-5 pt-5 rounded-[12px] border border-[#FFFFFF99] bg-[#1E1E1EA3] backdrop-blur-[20px]">
            <div className='flex justify-between'>
              <p className='ml-3 text-xl leading-[22px] font-medium'>Check your Inbox</p>
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
            <div className='mx-1 my-8'>
              <div className='flex gap-[16px]'>
                <div className='w-[61px] h-[61px] min-w-[61px] max-w-[61px] rounded-full bg-[#ffffff33] flex items-center justify-center'>
                </div>
                <div className='flex flex-col mt-3 gap-[10px]'>
                  <div className='flex justify-between items-center'>
                    <div className='bg-white rounded-[3.5px] w-[107px] h-[6px]'></div>
                    <div className='bg-[#ffffffcc] rounded-[3.5px] w-[38px] h-[5px]'></div>
                  </div>
                  <div className='bg-[#ffffff99] rounded-[3.5px] w-[223px] h-[4px]'></div>
                  <div className='bg-[#ffffff99] rounded-[3.5px] w-[107px] h-[4px]'></div>
                </div>
              </div>
              <div className='flex justify-end my-[18px]'>
                <div className='w-[231px] h-px bg-[#ffffff33]'></div>
              </div>
              <div className='flex gap-[18px]'>
                <div className='w-[61px] h-[61px] min-w-[61px] max-w-[61px] rounded-full bg-green-200 flex items-center justify-center'>
                  <img src={LogoLetter} alt="Stripe" className='w-auto h-[23px]' />
                </div>
                <div className='flex flex-col justify-center'>
                  <div className='flex justify-between items-center'>
                    <p className='text-lg font-medium leading-20 mb-1'>Auto flow</p>
                    <p className='text-[#ffffff66] text-xs leading-15'>4:21 PM</p>
                  </div>
                  <p className='text-[#ffffff66] text-sm -tracking-0.24 leading-17'>Dear customer your  code for account activation is 2930. Please enter....... </p>
                </div>
              </div>
              <div className='flex justify-end my-[18px]'>
                <div className='w-[231px] h-px bg-[#ffffff33]'></div>
              </div>
              <div className='flex gap-[16px]'>
                <div className='w-[61px] h-[61px] min-w-[61px] max-w-[61px] rounded-full bg-[#ffffff33] flex items-center justify-center'>
                </div>
                <div className='flex flex-col mt-3 gap-[10px]'>
                  <div className='flex justify-between items-center'>
                    <div className='bg-white rounded-[3.5px] w-[107px] h-[6px]'></div>
                    <div className='bg-[#ffffffcc] rounded-[3.5px] w-[38px] h-[5px]'></div>
                  </div>
                  <div className='bg-[#ffffff99] rounded-[3.5px] w-[223px] h-[4px]'></div>
                  <div className='bg-[#ffffff99] rounded-[3.5px] w-[107px] h-[4px]'></div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 w-full h-auto mt-[14px] p-4 rounded-[12px] border border-[#FFFFFF99] bg-[#1E1E1EA3]">
            <div className='w-[23px] h-[23px] rounded-full flex items-center justify-center bg-white'>
              <img src={CheckedSmall} className='w-full h-full'/>
            </div>
            <div className='flex flex-col justify-center'>
              <p className='text-lg font-medium'>Code sent successfully</p>
            </div>            
          </div>
        </div>
      </div>
    </div>
  )
};
