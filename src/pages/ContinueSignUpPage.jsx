import { Stepper } from '@/components/Stepper';
import { Pricing } from '@/components/Pricing';
import { Link } from 'react-router-dom';

export const ContinueSignUpPage = () => {
  return (
    <div className="continue-sign-up-page mt-[72px]">
      <div className='w-full flex justify-center'>
        <div className='w-[370px]'>
          <Stepper 
            completedSteps={['signup', 'pricing']}
          />
        </div>
      </div>
      <Pricing
        isHomePage={false}
      />
      <div className="flex justify-center mt-7">
        <Link
          to="/signup-details"
          className="w-[332px] px-4 py-[7px] flex items-center justify-center bg-green-200 rounded-[100px]"
        >
          <span className='text-xs text-[#090909] leading-normal font-semibold uppercase tracking-0.6'>Select plan</span>
        </Link>
      </div>
    </div>
  );
};
