import { SectionTitle } from './SectionTitle';
import Calendar from '../assets/calendar.png'

export const TripTracking = () => {
  return (
    <div className="max-w-1248 mx-auto w-full h-full mt-35 flex justify-between pt-72 rounded-12 border border-white-100 ">
      <div className=''>
        <div className='pl-110 pr-132 mt-61'>
          <SectionTitle text="// trip tracking" />
          <p className='mt-32 text-5xl leading-46 -tracking-3'>
            Calendar Syncing for better management between platforms
          </p>
          <p className='mt-48 w-330 text-base leading-20 -tracking-0.5'>
            When a trip is booked on one platform then all your other connected platforms will become blocked off instantly.
          </p>
        </div>
      </div>
      <div className='flex items-end justify-end'>
        <div className='w-557 h-488 rounded-tl-12 rounded-br-12 border border-gray-120 ' >
          <div className='w-full h-122 pt-9 pl-42'>
            <p className='text-xs leading-8 text-white'>2024</p>
            <p className='mt-14 text-4xl leading-25 text-white'>June</p>
          </div>
          <div className='w-full h-365'>
            <img
              src={Calendar}
              className='w-full h-full'
            />
          </div>
        </div>
      </div>
    </div>
  )
}
