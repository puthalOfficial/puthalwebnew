import React from 'react'
import Clinic from "./Clinic"
import Navbar from '../components/Navbar'
import TrustedSection from './TrustedSection'
import WhyChooseUs from './WhyChooseUs'
import CoreFeatures from './CoreFeature'
import HowItWorks from './HowItWork'
import Footer from '../components/Footer'
import BenefitsSection from './Benifits'

export default function Clinicpage() {
  return (
    <>
    <Navbar/> 
    <Clinic/>
    <TrustedSection/>
    <WhyChooseUs/>
    <CoreFeatures/>
    <HowItWorks/>
    <BenefitsSection/>
    <Footer/>
    </>
  )
}
