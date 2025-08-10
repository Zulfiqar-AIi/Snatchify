import React from 'react'
import Container from './Container.jsx'; // Assuming you have a Container component
import payment from '../../assets/payment.webp'; // Adjust the path as necessary

const Footer = () => {
  return (
   <div className='mt-10'>
  <Container className="flex flex-col md:flex-row items-center gap-4 justify-between">
    <p>@2025 Ecommerce Guru. All rights reserved.</p>
    <img src={payment} alt="payment-img" className='object-cover'/>
  </Container>
</div>
  )
}

export default Footer