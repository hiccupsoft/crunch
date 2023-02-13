import { Container } from '@mui/material'
import React from 'react'
import mobileCardBg2 from './../../../assets/mobileCardBg2.png'
import networkBg from './../../../assets/networkBg.png'
import card_phone_img from './../../../assets/card_phone_img.png'
import serverCard from './../../../assets/serverCard.png'
import securityCard from './../../../assets/securityCard.png'
import globeCard from './../../../assets/globeCard.png'
import processorCard from './../../../assets/processorCard.png'
import paymentCard from './../../../assets/paymentCard.png'
import crunchLeft1 from '../../../assets/crunchLeft1.png'
import crunchLeft1Shadow from '../../../assets/crunchLeft1Shadow.png'
import './crunchNetwork.css'
export const CrunchNetwork = () => {
  const cardsData = [
    { label: 'Lend', img: card_phone_img },
    { label: 'Farm', img: serverCard },
    { label: 'Vault', img: securityCard },
    { label: 'Swap', img: globeCard },
    { label: 'Vote', img: processorCard },
    { label: 'Add Crunch to wallet', img: paymentCard },
  ]
  return (
    <div className="network-main relative">
      <img
        src={crunchLeft1}
        alt="crunchLeft1"
        className="absolute top-1/3 left-0"
      />
      <img
        src={crunchLeft1Shadow}
        alt="crunchLeft1Shadow"
        className="absolute top-60 left-0"
      />
      <Container maxWidth="xl">
        <div className=" mb-10 px-4 ">
          <h1 className="network-heading text-center font-bold">
            Do so much with the Crunch Network
          </h1>
          <p className="text-black text-lg mt-20">Crunch services</p>
        </div>
        <div className="grid grid-cols-12 gap-5">
          {cardsData.map((data, ind) => (
            <div
              className="col-span-12 md:col-span-6 xl:col-span-4 flex justify-center"
              key={ind + 1}
            >
              <div
                className="bg-center object-contain bg-cover sm:bg-contain px-4 sm:px-10 py-10 w-full h-full bg-no-repeat flex flex-col items-center"
                style={{ backgroundImage: `url(${mobileCardBg2})` }}
              >
                <div
                  className="bg-center bg-contain bg-no-repeat h-40 w-60 flex justify-center items-center -mt-20"
                  style={{ backgroundImage: `url(${networkBg})` }}
                >
                  <img src={data.img} alt="card_phone_img" />
                </div>
                <div className="pb-5 sm:pb-14 2xl:pb-5">
                  <h1 className="text-white text-center text-lg tracking-wider font-semibold">
                    {data.label}
                  </h1>
                  <p className="text-center text-white font-thin text-md mt-5">
                    The Crunch Wallet allows users to convert their crypto
                    assets from one type of crypto assets to another.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}
