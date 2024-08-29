import Headline from '@/components/fleet/Headline'

const FleetPage = () => {
  return (
    <div className="flex-col pt-18 px-30 pb-8">
      <Headline />
      <div className="flex flex-row bg-gray-finance gap-14">
        <div className="flex flex-col grow h-48 bg-gray-finance gap-14">
          <div className="flex flex-row gap-14 pl-2">
            <div className="flex-initial w-180 bg-green-200">A</div>
            <div className="flex-initial w-180 bg-green-200">B</div>
            <div className="flex-initial w-180 bg-green-200">C</div>
          </div>

          <div className="w-full h-full bg-gray-110">D</div>
        </div>
        <div className="w-376 rounded-lg border border-gray-140 p-24">B</div>
      </div>
    </div>
  )
}

export default FleetPage
