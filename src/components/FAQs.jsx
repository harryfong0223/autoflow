import { SectionTitle } from './SectionTitle';
import { Accordion } from './Accordion';

export const FAQs = () => {

  return (
    <div className="max-w-1248 mx-auto w-full h-full mt-180 flex justify-between">
      <div className='w-315 mr-139'>
        <div className=''>
          <SectionTitle text="// FAQS" />
          <p className='mt-32 text-6xl leading-51 -tracking-3'>
            Frequently asked questions
          </p>
        </div>
      </div>
      <Accordion />
    </div>
  )
}
