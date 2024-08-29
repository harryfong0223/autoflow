import React from "react";
import { useSelector } from "react-redux";

import { Banner } from '@/components/Banner';
import { Features } from '@/components/Features';
import { TripTracking } from '@/components/TripTracking';
import { ChooseAutoflow } from '@/components/ChooseAutoflow';
import { EverythingOnePlace } from '@/components/EverythingOnePlace';
import { Pricing } from '@/components/Pricing';
import { FAQs } from '@/components/FAQs';


export const Home = () => {
  const { initData } = useSelector((state) => state.client);

  return (
    <div className="mb-146">
      <Banner />  
      <Features /> 
      <TripTracking /> 
      <ChooseAutoflow /> 
      <EverythingOnePlace />
      <Pricing />
      <FAQs />
    </div>
  )
};

