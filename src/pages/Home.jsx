import React, { Fragment } from 'react'
import AboutUs from '../components/About-us/AboutUs';
import Company from '../components/Company-section/Company';
import Header from '../components/Header/Header';
import HeroSection from '../components/Hero-section/HeroSection';
import Courses from '../components/Courses-section/Courses';
import ChooseUs from '../components/Choose-us/ChooseUs';
import Features from '../components/Feature-Section/Features';
import FreeCourse from '../components/Free-course-Section/FreeCourse';
import Enquiry from '../components/Enquiry-Section/Enquiry';
import Footer from '../components/Footer/Footer';



const Home = () => {
  return (
    <Fragment>
      
        <Header />
        <HeroSection />
        <Company />
        <AboutUs />
        <Courses />
        <FreeCourse />
        <ChooseUs />
        <Features />
        <Enquiry />
        <Footer />
        
    </Fragment>
  )
}

export default Home;
