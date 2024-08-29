
export const GetItDone = () => {
  return (
    <div className="max-w-1248 h-303 bg-green-200 mx-auto w-full flex items-center justify-between rounded-12 ">
      <div className='w-full flex flex-col items-center justify-center'>       
        <div className="mt-54">
          <span className='uppercase text-xs text-black-200 font-semibold leading-8'>
            // get it done
          </span>
        </div>
        <p className='mt-29 text-black text-6xl leading-42 font-medium'>Ready to get started?</p>
        <div className='flex gap-10 mt-16 mb-54'>
          <button
            type="button" 
            className="uppercase bg-black-200 text-green-200 text-xs font-semibold rounded-full leading-8 px-4 py-3 text-center"
          >
            14 days free trial
          </button>
          <button
            type="button"
            className="uppercase box-border text-black-200 border border-black-200 text-xs font-semibold rounded-full leading-8 px-4 py-10 text-center"
          >
            Contact us
          </button>
        </div>
      </div>
    </div>
  )
}

