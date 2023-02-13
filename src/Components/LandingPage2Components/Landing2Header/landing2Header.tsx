import React from 'react'
import Container from '@mui/material/Container'
import bg1 from '../../../assets/bg1.svg'
import iPhoneLeftView from '../../../assets/iPhoneLeftView.png'
import iPhoneRightView from '../../../assets/iPhoneRightView.png'
import yellowBg from '../../../assets/yellowBg.png'
import searchIcon from '../../../assets/searchIcon.png'
import './landing2Header.css'

export const Landing2Header = () => {
  let accountAddress = ''
  const getAccount = async () => {
    const accounts = await window.ethereum.request({
      method: 'eth_requestAccounts',
    })
    const account = accounts[0]

    return account
  }

  const connectButtonOnClick = () => {
    console.log(window)
    if (
      typeof window !== 'undefined' &&
      typeof window.ethereum !== 'undefined'
    ) {
      getAccount().then((response: any) => {
        accountAddress = response
      })
    } else {
      console.log('error')
    }
  }
  return (
    <Container
      maxWidth="xl"
      className="relative pt-10 sm:pt-16 mt-20 landing2-main"
    >
      <div className="blueBg"></div>
      <img src={yellowBg} alt="yellowBg" className="yellowBg absolute -bottom-40 right-0 z-0" />
      <div className="flex justify-center w-full px-4">
        <div
          className="rounded-full relative w-full z-10 border-2 border-indigo-800 px-2 sm:px-5 flex items-center overflow-hidden w-full sm:w-auto"
          style={{ backgroundColor: 'white' }}
        >
         <input
                    type='text'
                    defaultValue={""}
                    placeholder="Search token symbol"
                    className="w-full sm:w-96 border-0 text-sm text-black"
                    style={{ backgroundColor: 'transparent', outline: "none !important",
                    boxShadow: "0px 0px 0px" }}
                  />
          <button className='cursor-pointer'><img src={searchIcon} alt="searchIcon" /></button>
        </div>
      </div>
      <div
        className="md:grid md:grid-cols-12 flex-col-reverse gap-y-10 mt-16 flex flex-col md:gap-y-0 md:gap-x-5"
        style={{ paddingLeft: '5%', paddingRight: '5%' }}
      >
        <div className="col-span-7 pr-5 lg:pl-8 lg:pr-8 flex flex-col justify-center items-start">
          <div>
            <div className='relative'>
              <h1 className="heading relative z-10">
                Loaning made better
                <br /> with crypto
              </h1>
            </div>
            <p className="description mt-5 z-10 relative">
              The Crunch network is set to advance financial inclusion by
              connecting accessibility to need and availability. This occurs in
              an affordable and accessible peer-to-peer lending and borrowing
              system.
            </p>
            <div className="flex flex-wrap gap-y-5 gap-x-3 sm:gap-x-10 items-center lg:gap-x-20 mt-6 sm:mt-14 md:mt-20 lg:mt-16 xl:mt-20 top-auto left-auto absolute z-10">
              <button  onClick={() => {
                connectButtonOnClick()
              }} className="whitepaper py-1 sm:py-2 md:py-3 px-4 sm:px-5 md:px-8 rounded-full">
                Connect Wallet
              </button>
              <button className="presale py-1  sm:py-2 md:py-3 px-4 sm:px-5 md:px-8 rounded-full">
                Lend now
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-5 flex justify-center h-full relative">
          <img
            src={iPhoneRightView}
            className="text-white text-sm z-10 absolute right-0"
            alt="iPhoneRightView"
          />
          <img
            src={iPhoneLeftView}
            className="text-white text-sm z-10"
            alt="iPhoneLeftView"
          />
        </div>
      </div>
      <div
        className="linesBg1"
        style={{ backgroundImage: `url(${bg1})`, width: '100%' }}
      ></div>
    </Container>
  )
}
