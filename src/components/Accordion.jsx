import { Fragment, useState } from "react";
import MinusIcon from '../assets/minusIcon.png'
import AddIcon from '../assets/addIcon.png'

const data = [
  {
    id: 1,
    question: 'What are the benefits of working with us?',
    answer: 'Lorem ipsum dolor sit amet consectetur. Quam mi rhoncus ac odio tempor. Proin quam vitae tellus sagittis fusce nulla ut. Risus odio at cursus turpis tortor. Bibendum ultricies at tristique volutpat aliquet faucibus sodales. Vel accumsan sit.'
  },
  {
    id: 2,
    question: 'How does the process look like?',
    answer: 'Lorem ipsum dolor sit amet consectetur. Quam mi rhoncus ac odio tempor.'
  },
  {
    id: 3,
    question: 'Lorem ipsum dolor sit amet?',
    answer: 'Quam mi rhoncus ac odio tempor. Proin quam vitae tellus sagittis fusce nulla ut. Risus odio at cursus turpis tortor.'
  },
  {
    id: 4,
    question: 'Lorem ipsum dolor sit amet consectetur?',
    answer: 'Bibendum ultricies at tristique volutpat aliquet faucibus sodales.'
  },
  {
    id: 5,
    question: 'Lorem ipsum dolor sit amet consectetur?',
    answer: 'Proin quam vitae tellus sagittis fusce nulla ut. Risus odio at cursus turpis tortor.'
  }
];

export const Accordion = () => {
  const [activeId, setActiveId] = useState(0);

  const handleChange = (id) => {
    if(id === activeId) {
      return setActiveId(0);
    }
    setActiveId(id);
  }

  return (
    <div className='mt-45'>
      {
        data.map((item, index) => {
          const active = item.id === activeId;
          return (
            <Fragment key={item.id.toString()}>
              <div className='flex justify-between w-full mb-35'>
                <div className='w-593 mr-143'>
                  <p className='text-2xl text-white leading-17'>
                    {item.question}
                  </p>
                  {
                    active && (
                      <p className='mt-8 text-base text-gray-110 leading-19 -tracking-0.3'>
                        {item.answer}
                      </p>
                    )
                  }
                </div>
                <button 
                  className={`${active ? 'bg-green-200' : 'border border-white'} rounded-full w-58 h-36 flex items-center justify-center`}
                  onClick={() => handleChange(item.id)}
                >
                  <img
                    src={ active ? MinusIcon : AddIcon }
                    className='w-6 h-6'
                  />
                </button>
              </div>
              { index != data.length -1 && <div className='mb-45 w-full h-px bg-gradient-to-r from-white to-white-0 '></div> }
            </Fragment>
          )
        })
      }
    </div>
  )
}