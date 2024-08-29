import Headline from '@/components/dashboard/Headline'
import RentalsSection from '@/components/dashboard/RentalsSection'
import TotalSales from '@/components/dashboard/TotalSales'
import BookingsThroughAutoflow from '@/components/dashboard/BookingsThroughAutoflow'
import FinancialSummary from '@/components/dashboard/FinancialSummary'
import RentalRequests from '@/components/dashboard/RentalRequests'
import BusinessBookings from '@/components/dashboard/BusinessBookings'

const DashboardPage = () => {
  return (
    <div className="flex flex-col pt-18 px-30 pb-8">
      <Headline />
      <RentalsSection />
      <div className="flex lg:flex-row flex-col gap-14 pt-14">
        <div
          className="basis-1/3"
          style={{ height: 'calc((100vw - 360px) / 3 * 1.4)' }}
        >
          <TotalSales />
        </div>
        <div
          className="grid grid-rows-7 gap-14 basis-1/3"
          style={{ height: 'calc((100vw - 360px) / 3 * 1.4)' }}
        >
          <div className="row-span-2">
            <BookingsThroughAutoflow />
          </div>
          <div className="row-span-5">
            <RentalRequests />
          </div>
        </div>
        <div
          className="grid grid-rows-7 gap-14 basis-1/3"
          style={{ height: 'calc((100vw - 360px) / 3 * 1.4)' }}
        >
          <div className="row-span-2">
            <FinancialSummary />
          </div>
          <div className="row-span-5">
            <BusinessBookings />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage
