import { Container } from '@mui/material'
import React from 'react'
import member1 from '../../../assets/member1.png'
import member2 from '../../../assets/member2.png'
import './team.css'
export const Team = () => {
  return (
    <Container id="team" maxWidth="xl" sx={{ margin: '70px auto' }}>
      <h1 className="team-heading font-bold text-center mb-14">
        Meet our super team
      </h1>
      <div className="grid grid-cols-12 gap-y-10 sm:gap-y-0 sm:gap-x-5">
        <div className="col-span-12 sm:col-span-6 flex justify-center sm:justify-end">
          <div className="bg-white rounded-3xl border border-blue-800">
            <img src={member1} alt="member1" className="rounded-3xl" />
            <div className="py-6 lg:py-10">
              <h1 className="text-blue-800 font-semibold text-md md:text-lg lg:text-xl text-center">
                Michael Ehiagwina Omoarebu
              </h1>
              <p className="text-blue-800 font-semibold text-sm text-center font-semibold">
                Co-founder
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-12 sm:col-span-6 flex justify-center sm:justify-start">
          <div className="bg-white rounded-3xl border border-blue-800">
            <img src={member2} alt="member2" className="rounded-3xl" />
            <div className="py-6 lg:py-10">
              <h1 className="text-blue-800 font-semibold text-md md:text-lg lg:text-xl text-center">
                Michael Ehiagwina Omoarebu
              </h1>
              <p className="text-blue-800 font-semibold text-sm text-center font-semibold">
                Co-founder
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
