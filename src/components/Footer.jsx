import HeartIcon from '../assets/HeartIcon.png'
import InstagramIcon from '../assets/instagramIcon.png'
import FacebookIcon from '../assets/facebookIcon.png'
import TwitterIcon from '../assets/twitterIcon.png'
import LinkedinIcon from '../assets/linkedinIcon.png'


export const Footer = () => {
  return (
    <div className='w-full h-16 bg-black-400'>
      <div className="max-w-1248 mx-auto w-full h-full my-96 flex items-center justify-between">
        <div>
          <p className='text-sm leading-10 text-gray-140 font-medium'>© 2024 AutoFlow. All rights reserved.</p>
        </div>
        <div className='flex gap-14'>
          <div className='w-8 h-8 flex items-center justify-center rounded-full bg-gray-190'>
            <img
              src={InstagramIcon}
              alt="Heart Icon"
              className='w-14 h-14'
            />
          </div>
          <div className='w-8 h-8 flex items-center justify-center rounded-full bg-gray-190'>
            <img
              src={FacebookIcon}
              alt="Heart Icon"
              className='w-14 h-14'
            />
          </div>
          <div className='w-8 h-8 flex items-center justify-center rounded-full bg-gray-190'>
            <img
              src={TwitterIcon}
              alt="Heart Icon"
              className='w-14 h-14'
            />
          </div>
          <div className='w-8 h-8 flex items-center justify-center rounded-full bg-gray-190'>
            <img
              src={LinkedinIcon}
              alt="Heart Icon"
              className='w-14 h-14'
            />
          </div>
        </div>
        <div className='flex items-center gap-4'>
          <span>Designed with</span>
          <img
            src={HeartIcon}
            alt="Heart Icon"
            className='w-18 h-18'
          />
          <span>in Germany</span>
        </div>
      </div>
    </div>
  )
}

