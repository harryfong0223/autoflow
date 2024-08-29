import { Link } from "react-router-dom";

const steps = [
  {
    step: 'signup',
    path: '/sign-up'
  },
  {
    step: 'pricing',
    path: '/pricing'
  },
  {
    step: 'payment',
    path: '/payment'
  },
  {
    step: 'activation',
    path: '/activation'
  }
];

export const Stepper = ({
  completedSteps = ['signup'],
}) => {

  return (
    <div className='flex w-full h-auto gap-2'>
      {
        steps.map((step, index) => {
          const completed = completedSteps.includes(step.step);
          return (
            <Link
              key={index.toString()}
              to={step.path}
            >
              <div className={`${completed ? 'text-green-200' : 'text-[#D9D9D9]'} w-[86px] cursor-pointer`}>
                <p className='capitalize '>{step.step}</p>
                <div className={`w-[86px] h-[3px] ${completed ? 'bg-green-200' : 'bg-[#D9D9D9]'} rounded-[5px]`}></div>
              </div>
            </Link>
          )
        })
      }

    </div>
  )
}

