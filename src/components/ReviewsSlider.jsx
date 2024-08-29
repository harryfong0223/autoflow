import { useState } from 'react';
import Quote from '@/assets/quote.png'
import Checked from '@/assets/checked.png'
import Avatar from '@/assets/avatar.png'
import ArrowLeftWhite from '@/assets/arrow_left_white.png'
import ArrowRightBlack from '@/assets/arrow_right_black.png'

const data = [
  {
    id: 1,
    text: '111111 Lorem ipsum dolor sit amet consectetur.',
    user: {
      name: 'Joshua Pavis',
      img: Avatar,
    }
  },
  {
    id: 2,
    text: '222222 Lorem ipsum dolor sit amet consectetur. Quam mi rhoncus ac odio tempor. Proin quam vitae tellus sagittis fusce nulla ut. Risus odio at cursus turpis tortor. Bibendum ultricies at tristique volutpat aliquet faucibus sodales. Vel accumsan sit. Lorem ipsum dolor sit amet consectetur. Quam mi rhoncus ac odio tempor. Proin quam vitae tellus sagittis fusce nulla ut. Risus odio at cursus turpis tortor. Bibendum ultricies at tristique volutpat aliquet faucibus sodales. Vel accumsan sit.',
    user: {
      name: 'Joshua Pavis',
      img: Avatar,
    }
  },
  {
    id: 3,
    text: '3333333 Lorem ipsum dolor sit amet consectetur. Quam mi rhoncus ac odio tempor. Proin quam vitae tellus sagittis fusce nulla ut. Risus odio at cursus turpis tortor. Bibendum ultricies at tristique volutpat aliquet faucibus sodales. Vel accumsan sit.',
    user: {
      name: 'Joshua Pavis',
      img: Avatar,
    }
  },
  {
    id: 4,
    text: '4 Lorem ipsum dolor sit amet consectetur. Quam mi rhoncus ac odio tempor. Proin quam vitae tellus sagittis fusce nulla ut. Risus odio at cursus turpis tortor. Bibendum ultricies at tristique volutpat aliquet faucibus sodales. Vel accumsan sit.',
    user: {
      name: 'Joshua Pavis',
      img: Avatar,
    }
  },
  {
    id: 5,
    text: '555555 Lorem ipsum dolor sit amet consectetur. Quam mi rhoncus ac odio tempor. Proin quam vitae tellus sagittis fusce nulla ut. Risus odio at cursus turpis tortor. Bibendum ultricies at tristique volutpat aliquet faucibus sodales. Vel accumsan sit.',
    user: {
      name: 'Joshua Pavis',
      img: Avatar,
    }
  },
  {
    id: 6,
    text: '6 Lorem ipsum dolor sit amet consectetur. Quam mi rhoncus ac odio tempor. Proin quam vitae tellus sagittis fusce nulla ut. Risus odio at cursus turpis tortor. Bibendum ultricies at tristique volutpat aliquet faucibus sodales. Vel accumsan sit.',
    user: {
      name: 'Joshua Pavis',
      img: Avatar,
    }
  },
];

export const ReviewsSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  const getActiveData = (index) => {
    const activeElements = [];
    for (let i = 0; i < 3; i++) {
      activeElements.push(data[(index + i) % data.length]);
    }
    return activeElements;
  };

  const activeData = getActiveData(activeIndex);

  return (
    <div>
      <div className="w-[550px] min-h-[330px] mt-88 relative">
        {
          activeData?.map((review, index) => {
            return (
              <div
                key={review.id.toString()}
                className={`absolute transition-transform duration-500 ease-in-out ${index == 0 ? 'top-2 right-0 z-30 transform translate-x-[8px]' : ''} ${index == 1 ? 'right-[45px] origin-bottom -rotate-3.414 z-20 transform translate-x-[8px]' : ''} ${index ==  2 ? 'right-[58px] origin-bottom -rotate-9.702 z-10 transform translate-x-0' : ''}`}
              >
                <SliderCard
                  text={review.text}
                  userAvatar={review.user.img}
                  userName={review.user.name}
                />
              </div>
            )
          })
        }
      </div>
      <div className="flex justify-center mt-4 gap-[6px]">
        <button
          onClick={prevSlide}
          className="w-[58px] h-8 rounded-full flex items-center justify-center border"
        >
          <img
            className='w-6 h-6'
            src={ArrowLeftWhite}
            alt=''
          />
        </button>
        <button
          onClick={nextSlide} 
          className="bg-green-200 w-[58px] h-8 rounded-full flex items-center justify-center"
        >
          <img
            className='w-6 h-6'
            src={ArrowRightBlack}
            alt=''
          />
        </button>
      </div>
    </div>
  )
};


const SliderCard = ({
  text,
  userAvatar,
  userName,
}) => {
  return (
    <div 
      style={{background: "linear-gradient(310deg, rgba(255, 255, 255, 0.10) -4.94%, rgba(255, 255, 255, 0.04) 134.75%)"}}
      className="w-[502px] h-[278px] border border-[#fffffa33] rounded-12 px-5 pt-[28px] pb-[44px] backdrop-blur-2xl flex flex-col justify-between"
    >
      <div className="w-full">
        <div className='mb-4'>
          <img
            className="w-[21px] h-[14px]"
            src={Quote}
            alt='Quote'
          />
        </div>
        <div className='pr-[10px] pl-[22px]'>
          <p className='leading-6 -tracking-[0.43px] line-clamp-4'>{text}</p>
        </div>
        <div className='mt-2 flex justify-end'>
          <img
            className="w-[21px] h-[14px]"
            src={Quote}
            alt='Quote'
          />
        </div>
      </div>
      <div className='w-full flex items-center pl-[22px] mt-7'>
        <img
          className="w-[33px] h-[33px] rounded-full mr-2"
          src={userAvatar}
          alt='Avatar'
        />
        <span className='text-xs font-[450]'>{userName}</span>
        <div className='ml-2'>
          <img
            className="w-[13px] h-[13px] rounded-full"
            src={Checked}
            alt='Checked'
          />
        </div>
      </div>
    </div>
  )
};

