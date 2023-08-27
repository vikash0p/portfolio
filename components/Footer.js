import React from 'react'

const Footer = () => {
  return (
    <footer className=" text-white py-6">
      <div className="container mx-auto flex justify-center">
        <p className="text-center">
          &copy; {new Date().getFullYear()} <span className='text-blue-400'>Vikash</span>. All rights reserved.
        </p>
      </div>
      
    </footer>

  )
}

export default Footer
