import React from 'react'

const Footer = () => {
  return (
       <footer className="text-white py-6 mt-10">
      <div className="max-w-6xl mx-auto text-center text-sm">
        &copy; {new Date().getFullYear()} Nova Studio. Developed by Saad Bin Khalid.
      </div>
    </footer>
  )
}

export default Footer
