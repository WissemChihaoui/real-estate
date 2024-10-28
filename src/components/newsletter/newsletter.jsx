import React from 'react'
import { FaClosedCaptioning } from 'react-icons/fa';
import './newsletter.css';
const Newsletter = ({hideNewsletter}) => {
  return (
    <div className="subscribe-back">
    <div class="subscribe">
        <button className='close' onClick={()=>hideNewsletter()}>
            X
        </button>
        <h2 class="subscribe__title">Rejoindre notre newsletter</h2>
        <p class="subscribe__copy">Abonnez-vous pour recevoir les dernières offres immobilières et mises à jour exclusives. Nous vous promettons de ne pas vous envoyer de spam !</p>
        <div class="form">
            <input type="email" class="form__email" placeholder="Entrez votre adresse e-mail" />
            <button class="form__button">Envoyer</button>
        </div>
        <div class="notice">
            <input type="checkbox" />
            <span class="notice__copy">J'accepte que mon adresse e-mail soit stockée et utilisée pour recevoir la newsletter mensuelle.</span>
        </div>
    </div>
</div>

  )
}

export default Newsletter