import React from 'react'
import { HomeHeader } from '../../Components/HomeComponents/HomeHeader/homeheader'
import './home.css'
import Container from '@mui/material/Container'
import { EarnCrunch } from '../../Components/HomeComponents/EarnCrunch/EarnCrunch'
import { Roadmap } from '../../Components/HomeComponents/Roadmap/roadmap'
import { Team } from '../../Components/HomeComponents/Team/Team'
import { Community } from '../../Components/HomeComponents/Community/Community'
import Navbar from '../../Components/Navbar/Navbar'
import { Footer } from '../../Components/Footer'
export const Home = () => {

  return (
    <div>
      <Navbar></Navbar>
      <HomeHeader></HomeHeader>
      <Container maxWidth="md" id="about" className="my-20">
        <h1 className="whyCrunch-heading font-bold">Why choose Crunch?</h1>
        <p className="whyCrunch-description mt-6">
          The Crunch Network is primarily comprised of Lenders and Borrowers (or
          both,simultaneously) as Users amongst other facilitates. To access
          services on the network, Users may present themselves as either
          individuals or organizations. Our network aspires to build and unite
          open-source financial building blocks into sophisticated products with
          minimal friction and maximum value to Users. In view of fairness and
          inclusion it should cost no more at an organization level to provide
          services to a customer with $100 or $100million in assets, At Crunch
          we believe that all traditional financial infrastructure will be
          replaced by smart contracts that can deliver more value to a larger
          group of Users while simultaneously promoting security, transparency
          accessibility and inclusion.
        </p>
      </Container>
      <EarnCrunch></EarnCrunch>
      <Roadmap></Roadmap>
      <Team></Team>
      <Community></Community>
      <Footer landing2={false}></Footer>
    </div>
  )
}
