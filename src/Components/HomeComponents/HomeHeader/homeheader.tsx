import React from 'react'
import Container from '@mui/material/Container'
import rings from '../../../assets/Rings.svg'
import bg1 from '../../../assets/bg1.svg'
import './homeHeader.css'

export const HomeHeader = () => {

  return (
    <Container
      maxWidth="xl"
      sx={{ height: '605px' }}
      className="relative pt-10 sm:pt-16 mt-24"
    >
      <div className="blueBg"></div>
      <div className="sm:grid sm:grid-cols-12 flex-col-reverse gap-y-10  flex flex-col sm:gap-y-0 sm:gap-x-5" style={{paddingLeft:"5%", paddingRight: "5%"}}>
        <div className="col-span-7 pr-5 lg:pl-8 lg:pr-8 flex flex-col justify-center items-start">
          <div>
            <h1 className="heading">
              Loaning made better
              <br /> with crypto
            </h1>
            <p className="description mt-5 z-10 relative">
              The Crunch network is set to advance financial inclusion by
              connecting accessibility to need and availability. This occurs in
              an affordable and accessible peer-to-peer lending and borrowing
              system.
            </p>
            <div className="flex flex-wrap gap-y-5 gap-x-3 sm:gap-x-10 items-center lg:gap-x-20 mt-6 sm:mt-14 md:mt-20 lg:mt-16 xl:mt-20 top-auto left-auto absolute z-10">
              <button className="whitepaper py-1 sm:py-2 md:py-3 px-4 sm:px-5 md:px-8 rounded-full">
                Read Whitepaper
              </button>
              <button className="presale py-1  sm:py-2 md:py-3 px-4 sm:px-5 md:px-8 rounded-full">
                Join Presale
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-5 flex justify-center h-52 sm:h-full sm:justify-end">
          <img src={rings} className="text-white text-sm z-10" alt="rings" />
        </div>
      </div>
      <div className="bg1" style={{backgroundImage: `url(${bg1})`, width: "100%"}}>
      </div>
      {/* <img
        src={bg1}
        style={{ width: '100%' }}
        className="bg1"
        alt="bg1"
      /> */}
    </Container>
  )
}
