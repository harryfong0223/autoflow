import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import { MdMoreVert } from 'react-icons/md'

import { CustomTooltip } from '../shared/CustomTooltip'

const data = [
  { name: 'Week 1', bookings: 10 },
  { name: 'Week 2', bookings: 50 },
  { name: 'Week 3', bookings: 10 },
  { name: 'Week 4', bookings: 190 },
  { name: 'Week 5', bookings: 90 },
  { name: 'Week 6', bookings: 110 },
  { name: 'Week 7', bookings: 30 },
  { name: 'Week 8', bookings: 40 },
]

const BusinessBookings = () => {
  return (
    <div className="flex flex-col bg-transparent p-7 pb-16 rounded-lg text-white h-full border border-gray-140">
      <div className="flex justify-between items-start mb-2">
        <div className="flex items-center text-white">
          <img
            src="/dashboard/UserCircle.svg"
            className="size-60 text-lime-500"
          />
          <div className="flex flex-col gap-1">
            <span className="ml-2 text-xl font-medium">Business bookings</span>
            <span className="bg-lime-700/10 rounded-full text-center px-1 py-1 text-lime-600 text-sm w-79 ml-3">
              +17.63%
            </span>
          </div>
        </div>
        <div className="flex items-center">
          <button
            onClick={() => {
              alert('Sub-menu')
            }}
          >
            <MdMoreVert className="w-5 h-5 text-white/40 ml-2" />
          </button>
        </div>
      </div>

      <div className="mt-4 grow overflow-y-auto">
        <ResponsiveContainer>
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorBookings" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgba(205, 255, 5, 0.3)" />
                <stop offset="100%" stopColor="rgba(205, 255, 5, 0.0)" />
              </linearGradient>
            </defs>
            <Area
              type="monotone"
              dataKey="bookings"
              stroke="rgba(205, 255, 5, 1)"
              strokeWidth={3}
              fill="url(#colorBookings)"
            />
            <XAxis dataKey="name" hide />
            <YAxis hide />
            <Tooltip
              content={<CustomTooltip />}
              cursor={{ fill: 'transparent' }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="border-t border-white/20 my-4"></div>

      <div className="flex items-end text-white/60">
        <div>
          <span className="text-lg">This month</span>
          <p className="text-3xl text-white">13,531</p>
        </div>

        <div className="flex grow justify-end">
          <div className="grid justify-items-start">
            <p>Last month</p>
            <p className="text-xl text-white">27,338</p>
          </div>

          <div className="border-l border-white/10 mx-4"></div>

          <div className="grid justify-items-start">
            <p>Current Year</p>
            <p className="text-xl text-white">59,573</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BusinessBookings
