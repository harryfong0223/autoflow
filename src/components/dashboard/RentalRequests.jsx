import { MdDirectionsCar, MdCalendarToday } from 'react-icons/md'

const RentalRequests = () => {
  const requests = [
    { type: 'Sedan', date: '05 Jan 2024' },
    { type: 'SUV', date: '12 Feb 2024' },
    { type: 'XL', date: '26 Mar 2024' },
    { type: 'SUV', date: '10 Apr 2024' },
    { type: 'Sedan', date: '05 Jan 2024' },
  ]

  return (
    <div className="bg-transparent p-22 rounded-lg text-white flex flex-col h-full border border-gray-140">
      <h2 className="text-xl 2xl:text-2xl mb-25">Rental requests</h2>
      <ul className="grid content-around h-full overflow-y-auto">
        {requests.map((request, index) => (
          <li
            key={index}
            className={`flex justify-between items-center text-sm 2xl:text-lg py-3 border-gray-130 ${
              index < requests.length - 1 ? 'border-b-2' : ''
            }`}
          >
            <div className="flex items-center">
              <div className="size-32 rounded">
                <MdDirectionsCar className="w-full h-full rounded-[2px] text-black-200 bg-white" />
              </div>
              <span className="ml-4">{`Car (${request.type})`}</span>
            </div>
            <div className="flex items-center justify-self-start w-[130px] 2xl:w-[150px]">
              <MdCalendarToday className="size-32 text-white" />
              <span className="ml-2">{request.date}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RentalRequests
