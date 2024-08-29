import { SectionTitle } from "@/components/SectionTitle";
import { Accordion } from "@/components/Accordion";
import { ReviewsSlider } from "@/components/ReviewsSlider";

export const Faq = () => {

  return (
    <div className="px-22 mb-[65px]">
      <SectionTitle text="// ask anything" />
      <p className="mt-4 text-8xl font-medium leading-none -tracking-3.84">FAQ’s</p>
      <div className="pt-39">
        <Accordion />
      </div>
      <div className="">
        <SectionTitle text="// what people say about us" />
        <p className="mt-4 text-6xl font-medium leading-none -tracking-2.4">Customer reviews</p>
      </div>
      <div className="w-full flex items-center justify-center">
        <ReviewsSlider />
      </div>
    </div>
  )
};

