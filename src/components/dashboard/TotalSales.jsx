import { useState } from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from 'recharts'
import { AiOutlineCalendar } from 'react-icons/ai'

import { CustomTooltip } from '../shared/CustomTooltip'

const TotalSales = () => {
  const [selectedMonth, setSelectedMonth] = useState('June 2024')
  const data = [
    { name: '1W', sales: 30 },
    { name: '2W', sales: 70 },
    { name: '3W', sales: 120 },
    { name: '4W', sales: 60 },
    { name: '5W', sales: 90 },
  ]

  const months = [
    'January 2024',
    'February 2024',
    'March 2024',
    'April 2024',
    'May 2024',
    'June 2024',
    'July 2024',
    'August 2024',
    'September 2024',
    'October 2024',
    'November 2024',
    'December 2024',
  ]

  return (
    <div className="bg-green-200 p-30 h-full rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <div className="text-black font-semibold flex items-center">
          <AiOutlineCalendar className="mr-2" />
          Total sales
        </div>

        <select
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
          className="bg-transparent text-black border border-black rounded-full pl-14 py-1 w-172"
        >
          {months.map((month) => (
            <option key={month} value={month}>
              {month}
            </option>
          ))}
        </select>
      </div>

      <div className="text-black text-4xl font-bold mb-6 mt-[-12px]">
        {data.reduce((sum, item) => sum + item.sales, 0)}
      </div>

      <div style={{ height: 'calc(100% - 100px)' }}>
        <ResponsiveContainer>
          <BarChart
            data={data}
            margin={{ top: 20, right: 20, left: -10, bottom: 5 }}
          >
            <XAxis
              dataKey="name"
              tick={{ fill: 'black' }}
              axisLine={true}
              tickLine={false}
            />
            <YAxis tick={{ fill: 'black' }} axisLine={false} tickLine={false} />

            <Tooltip
              content={<CustomTooltip />}
              cursor={{ fill: 'transparent' }}
            />

            <ReferenceLine y={60} stroke="black" strokeDasharray="3 3" />

            <Bar dataKey="sales" fill="url(#colorUv)" />
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#212121" stopOpacity={1.0} />
                <stop
                  offset="132.5%"
                  stopColor="rgba(130, 130, 130, 0)"
                  stopOpacity={1.0}
                />
              </linearGradient>
            </defs>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default TotalSales
