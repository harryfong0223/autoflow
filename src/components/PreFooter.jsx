import { Link } from 'react-router-dom';
import Logo2 from '../assets/logo_2.png'


export const PreFooter = () => {
  return (
    <div className="max-w-1248 mx-auto w-full h-full my-96 flex justify-between">
      <Link to='/' className="w-229 h-27">
        <img
          src={Logo2}
          alt="header_logo"
          className='w-full h-full'
        />
      </Link>
      <div className='w-315 flex justify-between gap-120'>
        <div className='w-79'>
          <Link to='/contact'>
            <p className='mb-8 text-withe font-medium text-sm leading-10 -tracking-0.7'>Get in touch</p>
          </Link>
          <Link to='/faq'>
            <p className='mb-8 text-withe font-medium text-sm leading-10 -tracking-0.7'>FAQ</p>
          </Link>
        </div>
        <div className='w-124'>
          <Link to='/privacy-policy'>
            <p className='mb-8 text-withe font-medium text-sm leading-10 -tracking-0.7'>Privacy Policy</p>
          </Link>
          <Link to='/terms-and-conditions'>
            <p className='mb-8 text-withe font-medium text-sm leading-10 -tracking-0.7'>Terms & Conditions</p>
          </Link>
          <Link to='/refund-policy'>
            <p className='text-withe font-medium text-sm leading-10 -tracking-0.7'>Refund Policy</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

