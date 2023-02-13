import { Container } from '@mui/material'
import React from 'react'
import roadmapBg1 from '../../../assets/roadmapBg1.png'
import roadmapBg2 from '../../../assets/roadmapBg2.png'
import roadmapLeft from '../../../assets/roadmapLeft.png'
import roadmapLeftShadow from '../../../assets/roadmapLeftShadow.png'
import roadmapRight from '../../../assets/roadmapRight.png'
import roadmapRightShadow from '../../../assets/roadmapRightShadow.png'
import './roadmap.css'
export const Roadmap = () => {
  return (
    <div id="roadmap" className="mt-14 sm:mt-20 xl:mt-32">
      <h1 className="roadmap-heading text-center font-bold mb-10">Roadmap</h1>
      <div
        className="relative bg-center bg-no-repeat bg-contain"
        style={{ backgroundImage: `url(${roadmapBg1})` }}
      >
        <Container maxWidth="md">
          <div className="grid grid-cols-12 sm:-mr-1 sm:-mb-10">
            <div className="col-span-12 sm:col-span-6 flex justify-center px-4 sm:px-10 text-lg h-80 border-b-4 border-r-4 border-gray-300 borderBottomRight py-10">
              <div className="flex flex-col gap-y-10 items-center">
                <div>
                  <h1 className="text-2xl text-blue-600 font-semibold text-center">
                    Q3
                  </h1>
                  <h1 className="text-2xl text-blue-600 font-semibold text-center">
                    2021
                  </h1>
                </div>
                <p>Concept formulated</p>
              </div>
            </div>
            <div className="col-span-12 sm:col-span-6 flex justify-center px-4 sm:px-10 text-lg h-80 py-10 border-b-4 border-r-4 borderBottomRight border-gray-300 sm:border-0">
              <div className="flex flex-col gap-y-10 items-center">
                <div>
                  <h1 className="text-2xl text-blue-600 font-semibold text-center">
                    Q4
                  </h1>
                  <h1 className="text-2xl text-blue-600 font-semibold text-center">
                    2022
                  </h1>
                </div>
                <p>Team assembled Version 1 of Whitepaper is released</p>
              </div>
            </div>
          </div>
        </Container>
        <Container maxWidth="md">
          <div className="grid grid-cols-12 sm:-ml-1 sm:-mt-5">
            <div className="col-span-12 sm:col-span-6 flex justify-center px-4 sm:px-10 text-lg h-80 py-16 border-b-4 border-r-4 borderBottomRight border-gray-300 sm:border-0">
              <div className="flex flex-col gap-y-10 items-center">
                <div>
                  <h1 className="text-2xl text-blue-600 font-semibold text-center">
                    Q1
                  </h1>
                  <h1 className="text-2xl text-blue-600 font-semibold text-center">
                    2023
                  </h1>
                </div>
                <p>
                  Tech team hired, and development begins Public announcement at
                  BlockDera Private presale begins
                </p>
              </div>
            </div>
            <div className="col-span-12 sm:col-span-6 flex justify-center px-4 sm:px-10 text-lg h-80 py-16 sm:border-t-4  sm:border-l-4 last-item border-gray-300 borderTopLeft border-b-4 sm:border-b-0 border-r-4 sm:border-r-0">
              <div className="flex flex-col gap-y-10 items-center">
                <div>
                  <h1 className="text-2xl text-blue-600 font-semibold text-center">
                    Q2
                  </h1>
                  <h1 className="text-2xl text-blue-600 font-semibold text-center">
                    2023
                  </h1>
                </div>
                <p>
                  MVP of wallet prototype released website goes live Version 2
                  of Whitepaper released Public crowd sale
                </p>
              </div>
            </div>
          </div>
        </Container>
        <img
          src={roadmapLeft}
          alt="roadmapLeft"
          className="absolute -bottom-20 left-0"
        />
        <img
          src={roadmapLeftShadow}
          alt="roadmapLeftShadow"
          className="absolute -bottom-28 left-0"
        />
      </div>

      <div className="relative bg-center bg-no-repeat bg-contain"  style={{ backgroundImage: `url(${roadmapBg1})` }}>
        <Container
          maxWidth="md"
        >
          <div className="grid grid-cols-12 sm:-mr-1 sm:-mb-14">
            <div className="col-span-12 sm:col-span-6 flex justify-center px-4 sm:px-10 text-lg border-b-4 border-r-4 border-gray-300 borderBottomRight py-10">
              <div className="flex flex-col gap-y-10 items-center">
                <div>
                  <h1 className="text-2xl text-blue-600 font-semibold text-center">
                    Q3
                  </h1>
                  <h1 className="text-2xl text-blue-600 font-semibold text-center">
                    2023
                  </h1>
                </div>
                <p>
                  {' '}
                  Phase 1 of Crunch Wallet app released (will allow members to
                  deposit their crypto assets in a wallet to use as collateral
                  for loans) Expansion of stable Coins (we will be gradual
                  including more of the top 20 cryptocurrencies for use in our
                  wallet) Phase 2 of Crunch Wallet app to be released (1st fiat
                  currency loans to be issued, with member bank accounts linked
                  to wallet and loans to be paid back in fiat currency or CT).
                </p>
              </div>
            </div>
            <div className="col-span-12 sm:col-span-6 flex justify-center px-4 sm:px-10 text-lg py-10 border-b-4 border-r-4 borderBottomRight border-gray-300 sm:border-0">
              <div className="flex flex-col gap-y-10 items-center">
                <div>
                  <h1 className="text-2xl text-blue-600 font-semibold text-center">
                    Q4
                  </h1>
                  <h1 className="text-2xl text-blue-600 font-semibold text-center">
                    2023
                  </h1>
                </div>
                <p>Team assembled Version 1 of Whitepaper is released</p>
              </div>
            </div>
          </div>
        </Container>
        <Container maxWidth="md">
          <div className="grid grid-cols-12 sm:-ml-2 sm:-mt-10">
            <div className="col-span-12 sm:col-span-6 flex justify-center px-4 sm:px-10 text-lg h-80 pt-24 pb-10 border-b-4 border-r-4 borderBottomRight border-gray-300 sm:border-0">
              <div className="flex flex-col gap-y-10 items-center">
                <div>
                  <h1 className="text-2xl text-blue-600 font-semibold text-center">
                    2023
                  </h1>
                </div>
                <p>
                  Tech team hired, and development begins Public announcement at
                  BlockDera Private presale begins
                </p>
              </div>
            </div>
            <div
              className="col-span-12 sm:col-span-6 bg-center bg-cover bg-no-repeat flex justify-center px-4 sm:px-10 text-lg h-80 pb-10 pt-24 sm:border-t-4  sm:border-l-4 last-item border-gray-300 borderTopLeft border-b-4 sm:border-b-0 border-r-4 sm:border-r-0"
              style={{ backgroundImage: `url(${roadmapBg2})` }}
            >
              <h1 className="text-2xl text-blue-600 font-semibold text-center">
                More in the future
              </h1>
            </div>
          </div>
        </Container>
        <img
          src={roadmapRight}
          alt="roadmapRight"
          className="absolute bottom-28 right-0"
        />
        <img
          src={roadmapRightShadow}
          alt="roadmapRightShadow"
          className="absolute bottom-20 right-0"
        />
      </div>
    </div>
  )
}
