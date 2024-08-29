import { PiWrenchLight, PiKeyboard } from 'react-icons/pi'
import { AiOutlineCar } from 'react-icons/ai'

const FinancialSummary = () => {
  const summaries = [
    {
      icon: <PiWrenchLight className="size-32 2xl:size-36" />,
      amount: '$20k',
      label: 'Maintenance',
    },
    {
      icon: <AiOutlineCar className="size-32 2xl:size-36" />,
      amount: '$10k',
      label: 'Bookings',
    },
    {
      icon: <PiKeyboard className="size-32 2xl:size-36" />,
      amount: '$32k',
      label: 'Operations',
    },
  ]

  return (
    <div className="flex gap-14 h-full text-white text-left">
      {summaries.map((summary, index) => (
        <div
          key={index}
          className="bg-gray-finance p-14 pb-18 rounded-lg basis-1/3 flex flex-col justify-between"
        >
          {summary.icon}
          <div>
            <p className="text-2xl 2xl:text-3xl font-medium mt-2">
              {summary.amount}
            </p>
            <p className="text-sm 2xl:text-lg">{summary.label}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default FinancialSummary
