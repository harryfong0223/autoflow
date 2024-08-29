
import { SectionTitle } from './SectionTitle';
import EverythingInOnePlace from '../assets/everythingInOnePlace.png'

export const EverythingOnePlace = () => {
  return (
    <div className="max-w-1248 mx-auto w-full h-full mt-156 flex items-center justify-between pt-98 pb-88 rounded-12 border border-white-100 ">
      <div className=''>
        <div className='pr-132'>
          <img
            src={EverythingInOnePlace}
            className='w-453 h-342'
          />
        </div>
      </div>
      <div className='flex items-center'>
        <div className='w-619 mr-45' >
          <SectionTitle text="// everything in one place" />
          <div className='w-full mt-8'>
            <p className='font-medium text-6xl leading-54 -tracking-3'>
              Developing exceptional software for simplicity & user-friendliness 
            </p>
          </div>
          <div className='w-full flex gap-10 mt-16'>
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
              Still got questions?
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
