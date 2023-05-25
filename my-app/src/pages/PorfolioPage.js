import React, { useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Navigation from '../components/Navigation';


// import './App.css';



function PortfolioPage() {
      return (
              <div>
              <h1>Portfolio</h1>
            </div>
      );
  }


  export default PortfolioPage;

  
    /* 
  const [currentPage, setCurrentPage] = useState('AboutMe');
  
    // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
    const renderPage = () => {  
      console.log(currentPage)
      if (currentPage === 'Resume') {
        return <Resume />;
      }
      if (currentPage === 'AboutMe') {
        return <AboutMe />;
      }
      if (currentPage === 'Portfolio') {
          return <Portfolio />;
      }
      return <Contact />;
      
    };
  
    const handlePageChange = (page) => setCurrentPage(page);
  
    return (
      <div>

        <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />

        {renderPage()}
        <Footer currentPage={currentPage} handlePageChange={handlePageChange}/>
      </div>
      );
      */