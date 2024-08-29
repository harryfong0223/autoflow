
import { SectionTitle } from './SectionTitle';
import Subscription from '../assets/subscription.png'
import Avatar from '../assets/avatar.png'

export const Features = () => {
  return (
    <div className="max-w-1248 mx-auto w-full h-full pt-166 flex flex-col items-center justify-center">
      <div className='w-678 text-center'>
        <SectionTitle text="// features" />
        <p className='mt-6 text-white text-6xl font-medium leading-50 -tracking-3'>
          Boost revenue for any product with our expertise
        </p>
      </div>
      <div className='w-full mt-65 flex justify-center gap-27'>
        <div className='w-612 h-560 rounded-12 border border-white-100'>
          <div className='flex justify-end mt-34'>
            <img src={Subscription} 
              className='w-376 h-231'
            />
          </div>
          <div className='px-60'>
            <SectionTitle text="// flexible payment plans" />
            <p className='mt-45 text-5xl leading-43 -tracking-3'>
              Affordable subscription plans for all businesses
            </p>
            <p className='mt-37 w-401 text-base leading-19'>
              Want to change a small detail that all of your listings share? Create listing templates, FAQ's and guidelines to update multiple listings at once.
            </p>
          </div>
        </div>
        <div className='w-612 rounded-8 border border-white-100'>
          <div className='w-full px-60 pt-11 mb-30'>
            <div className='flex'>
              <img 
                src={Avatar} 
                className='w-36 h-36'
              />
              <div className='p-5 ml-10 w-239 h-94 bg-black-500 rounded-bl-12 rounded-r-12'>
                <p className='text-gray-170 text-sm leading-10'>Client</p>
                <p className='mt-3 text-white text-base leading-16'>There looks to be some problem with my booking?</p>
              </div>
            </div>
            <div className='flex justify-end mt-6'>
              <div className='p-5 ml-10 w-239 h-73 bg-green-200 rounded-l-12 rounded-br-12'>
                <p className='text-black text-sm font-bold leading-10 '>autoflow</p>
                <p className='mt-3 text-black text-base leading-11'>On it! Should be fixed asap!</p>
              </div>
              <div className='w-9 h-9 ml-10 bg-black flex items-center justify-center rounded-full'>
                <span className='text-green-200 text-base font-black leading-15 italic'>F</span>
              </div>
            </div>
          </div>
          <div className='px-60'>
            <SectionTitle text="// support dashboard" />
            <p className='mt-45 text-5xl leading-43 -tracking-3'>
              Providing seamless assistance to clients
            </p>
            <p className='mt-37 w-401 text-base leading-19'>
              Managers will have the capability to make real time edits, ensuring flexibility and responsiveness to evolving needs
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
