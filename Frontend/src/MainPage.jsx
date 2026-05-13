import React from 'react'
import Footer from './Footer';
import Navbar from './Navbar';
import RightMain from './RightSection/RightMain';
import Project from './Project/Project'

function MainPage() {
    return ( 
        <div style={{ height:"100vh" , width:"100vw"}} >
        <div className='container-fluid px-0 p-l-0"' >
            <div className='row g-0' >


                     {/* part of right Section */}
                 <div className='col-12' style={{ height:"100vh" }}>
                    <Navbar/>
                    <RightMain/>
                    <Project/>
                    <Footer/>
                 </div>
            </div>
        </div>
        </div>
     );
}

export default MainPage;