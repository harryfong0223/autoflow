const Headline = () => {
  return (
    <div className="relative mb-25 w-full flex justify-end">
      <div className="space-x-4">
        <button className="h-8 border px-4 py-1 rounded-full hover:bg-white-100 hover:text-black-500 leading-8">
          ADD VEHICLE
        </button>
        <button className="h-8 border px-4 py-1 rounded-full hover:bg-white-100 hover:text-black-500 leading-8">
          VIEW PLAN
        </button>
      </div>
    </div>
  )
}

export default Headline
