import { Container } from '@mui/material'
import React from 'react'
import './community.css'
import twitter from '../../../assets/twitter.png'
import telegram from '../../../assets/Telegram.png'
import discord from '../../../assets/Discord.png'
export const Community = () => {
  return (
    <Container maxWidth="xl" sx={{ margin: '70px auto' }}>
      <h1 className="community-heading font-bold text-center mb-14">
        Join our growing community
      </h1>
      <div
        className="grid grid-cols-9 gap-y-4 sm:gap-y-0 sm:gap-x-4 grid-div"
        
      >
        <div className="col-span-12 sm:col-span-3">
          <div className="outer-div">
            <div className="middle-div h-full">
              <div className="inner-div h-full">
                <div
                  className="flex flex-col items-center justify-around h-full py-5"
                  style={{ backgroundColor: '#F2F2F2' }}
                >
                  <img src={twitter} alt="twitter" />
                  <p className='font-semibold text-sm'>Over 9k Followers</p>
                  <button className="follow-btn rounded-full mt-4 text-xs px-8 py-2">
                    Follow
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 sm:col-span-3">
          <div className="outer-div">
            <div className="middle-div h-full">
              <div className="inner-div h-full">
                <div
                  className="flex flex-col items-center justify-around h-full py-5"
                  style={{ backgroundColor: '#F2F2F2' }}
                >
                  <img src={discord} alt="discord" />
                  <p className='font-semibold text-sm'>Over 10k Followers</p>
                  <button className="follow-btn rounded-full mt-4 text-xs px-8 py-2">
                    Follow
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 sm:col-span-3">
          <div className="outer-div">
            <div className="middle-div h-full">
              <div className="inner-div h-full">
                <div
                  className="flex flex-col items-center justify-around h-full py-5"
                  style={{ backgroundColor: '#F2F2F2' }}
                >
                  <img src={telegram} alt="telegram" />
                  <p className='font-semibold text-sm'>Over 10k Followers</p>
                  <button className="follow-btn rounded-full mt-4 text-xs px-8 py-2">
                    Follow
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
