import React from 'react'
import Container from '@mui/material/Container'
import './earnCrunch.css'
import mobileCardBg1 from '../../../assets/mobileCardBg1.png'
import mobileCardBg2 from '../../../assets/mobileCardBg2.png'
import payment from '../../../assets/payment.png'
import phone from '../../../assets/phone.png'
import crunchLeft1 from '../../../assets/crunchLeft1.png'
import crunchLeft1Shadow from '../../../assets/crunchLeft1Shadow.png'
import crunchRight1 from '../../../assets/crunchRight1.png'
import crunchRight1Shadow from '../../../assets/crunchRight1Shadow.png'
import socialBg1 from '../../../assets/socialBg1.png'
import bgLines from '../../../assets/bgLines.png'
import cil_arrow_circle_right from '../../../assets/cil_arrow-circle-right.png'

export const EarnCrunch = () => {
  return (
    <div className="relative earncrunch-main">
      <div className="flex flex-col items-center gap-y-10">
        <div id="product"
          style={{ paddingLeft: '10%', paddingRight: '10%', paddingTop: '8%' }}
          className="relative"
        >
          <Container  maxWidth="xl">
            <div className="flex lg:flex-row flex-col-reverse justify-between items-center lg:items-start gap-y-5 lg:gap-x-5 w-full">
              <div className="w-full lg:w-2/3 xl:w-1/2 item-content">
                <h1 className="card-heading font-bold">
                  Easily earn while you
                  <br /> <span className="sub-heading">lend</span> crypto
                </h1>
                <p className="card-desc mt-5">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                  nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                  aliquip ex ea commodo consequat. Duis autem vel eum iriure
                  dolor in hendrerit in
                </p>
                <button className="get-started py-2 mt-10 px-8 rounded-full">
                  Get Started
                </button>
              </div>
              <div className="w-full lg:w-1/3">
                <div
                  className="w-full h-full bg-no-repeat bg-center bg-contain flex justify-center"
                  style={{ backgroundImage: `url(${mobileCardBg1})` }}
                >
                  <img src={phone} alt="phone" />
                </div>
              </div>
            </div>
          </Container>
          <img
            src={crunchLeft1}
            alt="crunchLeft1"
            className="absolute top-0 left-0"
          />
          <img
            src={crunchLeft1Shadow}
            alt="crunchLeft1Shadow"
            className="absolute -top-10 left-0"
          />
        </div>
        <div
          style={{ paddingLeft: '10%', paddingRight: '10%', paddingTop: '2%' }}
          className="relative"
        >
          <img
            src={crunchRight1Shadow}
            alt="crunchRight1Shadow"
            className="absolute -top-28 right-0"
          />
          <img
            src={crunchRight1}
            alt="crunchRight1"
            className="absolute -top-20 right-0"
          />
          <Container maxWidth="xl">
            <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-y-5 lg:gap-x-5 w-full">
              <div
                className="w-full lg:w-1/3 bg-no-repeat bg-center bg-contain flex justify-center items-center"
                style={{ backgroundImage: `url(${mobileCardBg2})` }}
              >
                <img src={payment} alt="phone" />
              </div>
              <div className="lg:w-2/3 xl:w-1/2 item-content">
                <h1 className="card-heading font-bold">
                  <span className="sub-heading">Borrow</span> Crypto at lower
                  <br />
                  rates with Crunch
                </h1>
                <p className="card-desc mt-5">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                  nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                  aliquip ex ea commodo consequat. Duis autem vel eum iriure
                  dolor in hendrerit in
                </p>
                <button className="absolute z-10 get-started py-2 mt-10 px-8 rounded-full">
                  Get Started
                </button>
              </div>
            </div>
          </Container>
        </div>
      </div>
      <div className="flex justify-center mt-32 lg:mt-40 absolute z-10 w-full cil_arrow_circle_right">
        <img src={cil_arrow_circle_right} alt="cil_arrow_circle_right" />
      </div>
      <div
        className="earnCrunchBg"
        style={{ backgroundImage: `url(${bgLines})`, width: '100%' }}
      ></div>

      <div id="news" className="absolute z-10 mt-60 lg:mt-80 w-full left-0 right-0">
        <Container maxWidth="md">
          <h1 className="text-center company-heading font-bold">
            Company News
          </h1>
          <div className="mt-8 sm:mt-14 border-2 border-gray-300 rounded-xl bg-white flex justify-center items-center px-5 sm:px-20 md:px-32">
            <div
              className="flex flex-col items-center  bg-no-repeat bg-contain bg-left py-5"
              style={{ backgroundImage: `url(${socialBg1})` }}
            >
              <h1 className="text-center font-semibold text-xl">
                Partnership with Social Bridge PRO
              </h1>
              <p className="text-center text-black mt-6">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim
              </p>
              <a className="underline text-blue-600 mt-6 cursor-pointer">
                Read now
              </a>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}
