import React from 'react'
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Toaster from 'react-hot-toast';

const Layout = ({children}) => {
  return (
    <div>
        <Header />
        {children}
        <Footer />
        <Toaster 
        position="bottom-right"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        toastOptions={{
          style: {
            backgroundColor: "black",
            color: "white",
          },
        }}
        />
    </div>
  )
}

export default Layout;