import React from 'react'
import "./style/footer.css";


function Footer() {
  return (
    <footer className='footer'>
      <p>All Rights Reserved &copy; {new Date().getFullYear()}</p>
      <p>Mustafa Altaş</p>
    </footer>
  )
}

export default Footer
