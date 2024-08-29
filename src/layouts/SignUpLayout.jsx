import React, { useEffect, useRef} from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { fetchInitDataAsync } from '@/redux/clientReducer';
import { Spinner } from '@/components/Spinner';
import Logo3 from '@/assets/logo_3.png'

export const SignUpLayout = ({children}) => {

  const dispatch = useDispatch();
  const ref = useRef(null)

  const { loadingInitData } = useSelector((state) => state.client);

  useEffect(() => {
    dispatch(fetchInitDataAsync());
  }, [dispatch])


  if (loadingInitData) {
    return (
      <div className='w-full h-svh'>
        <Spinner />
      </div>
    );
  }

  return (
    <div className='relative w-full h-full font-hoves'>
        <div className="fixed top-0 left-0 w-full h-[82px] flex items-center justify-end">
          <Link
            to='/sign-up'
            className='m-8'
          >
            <img
              src={Logo3}
              alt="header_logo"
              className='w-[171px] h-[21px]'
            />
          </Link>
        </div>
        <div className={`mx-auto relative w-full h-auto `}>
          {children}
        </div>
    </div>
  )
};

