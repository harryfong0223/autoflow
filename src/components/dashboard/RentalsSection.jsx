const RentalsSection = () => {
  const rentals = [
    {
      type: 'Car ( SUV )',
      number: 'CX FE 4403',
      from: '05 Jan 2024',
      to: '08 Jan 2024',
      location: 'Hamburg',
      client: 'Rober Hoak',
      status: 'UPCOMING',
    },
    {
      type: 'Car ( XL )',
      number: 'CX FE 4403',
      from: '12 Apr 2024',
      to: '14 Apr 2024',
      location: 'Bremen',
      client: 'Daniyel Dam',
      status: 'OVERDUE',
    },
    {
      type: 'Car ( SUV )',
      number: 'CX FE 4403',
      from: '05 Jan 2024',
      to: '08 Jan 2024',
      location: 'Hamburg',
      client: 'Rober Hoak',
      status: 'UPCOMING',
    },
    {
      type: 'Car ( XL )',
      number: 'CX FE 4403',
      from: '12 Apr 2024',
      to: '14 Apr 2024',
      location: 'Bremen',
      client: 'Daniyel Dam',
      status: 'OVERDUE',
    },
  ]

  return (
    <>
      <section className="text-white border rounded-lg border-gray-140">
        <div className="bg-green-200 rounded-lg-top text-black p-4 px-7 flex justify-between rounded-t-lg">
          <span className="font-semibold">My Rentals</span>
          <span>Total : 16</span>
        </div>
        <table className="w-full table-auto">
          <thead>
            <tr className="text-left bg-gray-130 text-gray-110">
              <th className="p-11 pl-22">Vehicle type</th>
              <th className="p-11">Number</th>
              <th className="p-11">From</th>
              <th className="p-11">To</th>
              <th className="p-11">Location</th>
              <th className="p-11">Client</th>
              <th className="p-11">Status</th>
            </tr>
          </thead>
          <tbody>
            {rentals.map((rental, index) => (
              <tr
                key={index}
                className={`${
                  rentals.length !== index + 1 ? 'border-b' : ''
                } border-gray-700 text-white-100`}
              >
                <td className="p-15 pl-22">{rental.type}</td>
                <td className="p-15">{rental.number}</td>
                <td className="p-15">{rental.from}</td>
                <td className="p-15">{rental.to}</td>
                <td className="p-15">{rental.location}</td>
                <td className="p-15">{rental.client}</td>
                <td className="p-15 text-xs">
                  <span
                    className={`text-base ${
                      rental.status === 'UPCOMING'
                        ? 'text-yellow-500'
                        : 'text-red-500'
                    }`}
                  >
                    •{' '}
                  </span>
                  {rental.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="px-22">
          <div className="justify-center my-4 mb-6">
            <button className="w-full h-8 border px-4 py-1 rounded-full hover:bg-white-100 hover:text-black-500 leading-8">
              VIEW ALL
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default RentalsSection
