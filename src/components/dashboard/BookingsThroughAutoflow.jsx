import { MdMobileFriendly, MdOutlineArrowOutward } from 'react-icons/md'

const BookingsThroughAutoflow = () => {
  return (
    <div className="bg-transparent p-22 rounded-lg text-white h-full border border-gray-140">
      <div className="flex flex-col justify-between h-full">
        <div className="justify-self-start">
          <MdMobileFriendly className="size-26 2xl:size-36 text-white/60" />
        </div>
        <span className="text-base 2xl:text-xl text-white/60">
          Bookings through autoflow
        </span>
        <div className="flex justify-between">
          <span className="text-2xl 2xl:text-3xl font-bold text-white">
            469
          </span>
          <button
            onClick={() => {
              alert(469)
            }}
          >
            <MdOutlineArrowOutward className="size-6 xl:size-8 text-white" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default BookingsThroughAutoflow
