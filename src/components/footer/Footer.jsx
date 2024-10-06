import React from 'react'
import './Footer.scss'
const Footer = () => {
  return (
    <div className='footer'>
        <div className='footerContent'>
            <div className='about'>
                <a href="/" className="logo">
                    <img src="/logo.png" alt="" />
                    <span>LamaEstate</span>
                </a>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque nesciunt eum atque nulla repellat asperiores animi optio unde voluptatum totam. Excepturi a at neque aliquam sint optio explicabo ut esse.</p>
            </div>
            <div className='links'>
                <a href="#">Des terrains</a>
                <a href="#">Des Bien Immobilier</a>
                <a href="#">Annoncer</a>
            </div>
        </div>
        <div className='rights'>
            Toutes les droits sont réservé à <a target={'_blank'} href="https://wisecode.netlify.app">Wise Code</a>, 2024
        </div>
    </div>
  )
}

export default Footer