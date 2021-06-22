import React from 'react';
import Footer from '../Footer/Footer';
import NavBar from '../Navbar/Navbar';

const PageWrapper = ({ children }) => {
    return ( 
        <>
            <NavBar />
            <div>{ children }</div>
            <Footer />
        </>
     );
}
 
export default PageWrapper;