import { Container } from '@mui/material'
import React from 'react'
import logo from '../logo.svg'
import PoweredIcon from './../assets/poweredIcon.png'
import FacebookIcon from './../assets/FacebookIcon.png'
import twitterIcon from './../assets/twitterIcon.png'
import instaIcon from './../assets/instaIcon.png'
import linkedInIcon from './../assets/linkedInIcon.png'
import youTubeIcon from './../assets/youTubeIcon.png'
import arrowUp from './../assets/arrowUp.png'
import './footer.css'
import { useNavigate } from 'react-router-dom'
interface boolProps {
  landing2: any
}
export const Footer: React.FunctionComponent<boolProps> = ({ landing2 }) => {

  let navigate = useNavigate()
  return (
    <div
      className="footer-main absolute w-full z-10"
      style={{ backgroundColor: '#5767AF' }}
    >
      <Container maxWidth="xl">
        <div className="grid grid-cols-12 gap-y-20 lg:gap-y-0">
          <div className="col-span-12 lg:col-span-8">
            <button onClick={() => {navigate("/")}}>
            <img
              src={logo}
              className="cursor-pointer text-white App-logo text-sm"
              alt="logo"
            />
              </button>
            <div className="grid grid-cols-12 mt-14 gap-y-10 sm:gap-y-0">
              <div className="col-span-6 sm:col-span-3 flex flex-col gap-y-10">
                <h1 className="font-semibold text-2xl text-white px-5">DOCS</h1>
                <ul className="flex flex-col items-start gap-y-6">
                  <li>
                    <a
                      href="#"
                      className="cursor-pointer link-item rounded-full px-5 py-1 font-light tracking-wider text-sm text-white"
                    >
                      Whitepaper
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="cursor-pointer link-item rounded-full px-5 py-1 font-light tracking-wider text-sm text-white"
                    >
                      Tokenomics
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="cursor-pointer link-item rounded-full px-5 py-1 font-light tracking-wider text-sm text-white"
                    >
                      Governance
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-span-6 sm:col-span-3 flex flex-col gap-y-10">
                <h1 className="font-semibold text-2xl text-white px-5">
                  Product
                </h1>
                <ul className="flex flex-col items-start gap-y-6">
                  <li>
                    <a
                      href="#"
                      className="cursor-pointer link-item rounded-full px-5 py-1 font-light tracking-wider text-sm text-white"
                    >
                      Swap
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="cursor-pointer link-item rounded-full px-5 py-1 font-light tracking-wider text-sm text-white"
                    >
                      Lend
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="cursor-pointer link-item rounded-full px-5 py-1 font-light tracking-wider text-sm text-white"
                    >
                      Borrowing
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-span-12 sm:col-span-6 flex flex-col gap-y-10">
                <h1 className="font-semibold text-2xl text-white">
                  Stay in touch
                </h1>
                <div
                  className="rounded-full py-1 px-2 sm:px-5 flex items-center overflow-hidden"
                  style={{ backgroundColor: '#F2F2F2' }}
                >
                  <input
                    type={'text'}
                    placeholder="Enter email"
                    className="w-full border-0 text-sm"
                    style={{ backgroundColor: '#F2F2F2', outline: "none !important",
                    boxShadow: "0px 0px 0px" }}
                  />
                  <button className="subscribe-btn rounded-full text-xs px-4 sm:px-8 py-2">
                    Subscribe
                  </button>
                </div>
                <div>
                  <p className="text-white text-xs text-center">Powered by</p>
                  <div className="flex items-center gap-x-2 justify-center">
                    <img
                      src={PoweredIcon}
                      alt="PoweredIcon"
                      className="w-4 h-4"
                    />
                    <span className="text-sm font-bold text-white ">
                      polygonscan
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-4 flex flex-col gap-y-5 sm:flex-row lg:flex-col items-center justify-between px-4">
            <div>
              <h1 className="font-thin tracking-wider text-white text-lg text-center lg:text-left">
                Let's get social
              </h1>
              <div className="flex items-center justify-center gap-x-4 mt-5">
                <a href="#">
                  <img className='cursor-pointer duration-500' src={FacebookIcon} alt="FacebookIcon" />
                </a>
                <a href="#">
                  <img className='cursor-pointer duration-500' src={twitterIcon} alt="twitterIcon" />
                </a>
                <a href="#">
                  <img className='cursor-pointer duration-500' src={instaIcon} alt="instaIcon" />
                </a>
                <a href="#">
                  <img className='cursor-pointer duration-500' src={linkedInIcon} alt="linkedInIcon" />
                </a>
                <a href="#">
                  <img className='cursor-pointer duration-500' src={youTubeIcon} alt="youTubeIcon" />
                </a>
              </div>
            </div>
            {landing2 && (
              <div className="flex justify-end items-center sm:w-full">
                <button
                  onClick={() => {
                    window.scrollTo(0, 0)
                  }}
                >
                  <img src={arrowUp} alt="arrowUp" className="w-10 h-10" />
                </button>
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  )
}
