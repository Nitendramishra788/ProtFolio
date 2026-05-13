import React from 'react'
import Hero from './Hero';
import Navbar from '../Navbar';
import Footer from '../Footer';
import ContactSocial from './ContactSocial';


function ContactMainPage() {
    return ( 
        <>
        <Navbar/>
        <Hero/>
        <ContactSocial/>
        <Footer/>
        </>
     );
}

export default ContactMainPage;