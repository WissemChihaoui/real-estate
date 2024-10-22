import React from 'react'
import ContactBand from '../contactBand/contactBand'
import './Footer.scss'
const Footer = () => {
  return (
    <div className='footer'>
        <ContactBand />
        <div className='footerContent'>
            <div className='about'>
                <a href="/" className="logo">
                    <img src="/logo.png" alt="" />
                    <span>Krayem</span>
                </a>
                <p>Krayem Immobiliere est une agence immobilière sise à Djerba midoun.Elle est spécialisée dans la vente Location et l'achat de biens immobiliers ( des villas terrains maisons appartements résidences) et permet de gagner beaucoup de temps .soyez bienvenus</p>
            </div>
            <div className='links'>
                <a href="/list?type=t">Des terrains</a>
                <a href="/list?type=b">Des Bien Immobilier</a>
                <a href="#">Annoncer</a>
            </div>
        </div>
        <div className='rights'>
            Toutes les droits sont réservé à <a target={'_blank'} href="https://wise-code.netlify.app">Wise Code</a>, 2024
        </div>
    </div>
  )
}

export default Footer