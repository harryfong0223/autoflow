
export const PaymentCard = ({
  logo, 
}) => {
  return (
    <div className="w-[115px] h-[54px] flex items-center justify-center rounded-8 border border-gray-180">
      <img 
        src={logo}
        alt={logo}
      />
    </div>
  )
}