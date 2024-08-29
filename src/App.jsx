import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { Layouts } from '@/layouts'
import { UserRoutes } from '@/routes'

function App() {
  return (
    <Routes>
      <Route path="/*" element={<Layouts />} />
      <Route path="/user/*" element={<UserRoutes />} />
    </Routes>
  )
}

export default App

// import React, {useState, useEffect, useRef} from 'react';
// import { Header } from '@/components/Header';
// import { Banner } from '@/components/Banner';
// import { Features } from '@/components/Features';
// import { TripTracking } from '@/components/TripTracking';
// import { ChooseAutoflow } from '@/components/ChooseAutoflow';
// import { EverythingOnePlace } from '@/components/EverythingOnePlace';
// import { Pricing } from '@/components/Pricing';
// import { FAQs } from '@/components/FAQs';
// import { GetItDone } from '@/components/GetItDone';
// import { PreFooter } from '@/components/PreFooter';
// import { Footer } from '@/components/Footer';
// import Mask1 from '@/assets/Mask_1.png';
// import Mask2 from '@/assets/Mask_2.png';
// import Mask3 from '@/assets/Mask_3.png';
// // import { Loader } from '@/components/Loader';
// import { Layouts } from '@/layouts';

// function App() {

//   const [height, setHeight] = useState(5151)
//   const ref = useRef(null)

//   useEffect(() => {
//     if(ref?.current) {
//       setHeight(ref.current?.clientHeight - 1229)
//     }
//   })

//   return (
//     <Layouts>
//       {/* <Banner />
//       <Features />
//       <TripTracking />
//       <ChooseAutoflow />
//       <EverythingOnePlace />
//       <Pricing />
//       <FAQs /> */}
//     </Layouts>
//   )

//   return (
//     <div className='relative w-full h-full font-hoves'>
//       <img
//         src={Mask1}
//         alt="mask_1"
//         className='absolute top-0 left-0 w-full h-auto z-0 max-w-full max-h-1860 object-cover object-center'
//       />
//       <img
//         src={Mask2}
//         alt="mask_2"
//         className='absolute top-2350 left-0 w-full h-auto z-0 max-w-full max-h-1860 object-cover object-center'
//       />
//       <div
//         style={{top: height + "px"}}
//         className={`absolute left-0 w-full h-auto z-0 max-w-full max-h-1860 object-cover object-center overflow-hidden`}
//       >
//         <img
//           src={Mask3}
//           alt="mask_3"
//         />
//       </div>
//       <div ref={ref} className='absolute w-full h-auto z-1'>
//         <Header />
//         <div className={`max-w-1292 mx-auto pt-155 relative w-full h-auto `}>
//           <Banner />
//           <Features />
//           <TripTracking />
//           <ChooseAutoflow />
//           <EverythingOnePlace />
//           <Pricing />
//           <FAQs />
//           <GetItDone />
//           <PreFooter />
//         </div>
//         <Footer />
//       </div>
//     </div>
//   )
// }

// export default App
