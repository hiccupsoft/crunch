import React from 'react'
import Navbar2 from '../../Components/Navbar/Navbar2'
import { Landing2Header } from './../../Components/LandingPage2Components/Landing2Header/landing2Header'
import { CrunchNetwork } from './../../Components/LandingPage2Components/CrunchNetwork/crunchNetwork'
import { TopGainers } from '../../Components/LandingPage2Components/TopGainers/topGainers'
import { Footer } from '../../Components/Footer'
export const LandingPage2 = () => {
  return (
    <div>
      <Navbar2></Navbar2>
      <Landing2Header></Landing2Header>
      <CrunchNetwork></CrunchNetwork>
      <TopGainers></TopGainers>
      <Footer landing2={true}></Footer>
    </div>
  )
}
