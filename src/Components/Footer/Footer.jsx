import { Facebook, Instagram, Whatsapp, Youtube } from 'iconsax-react'
import React from 'react'
import './Assets/styles.css'
import Mastercard from './Assets/Img/Mastercard.png'
import Visa from './Assets/Img/Visa.png'
import Appstore from './Assets/Img/Appstore.png'
import Googleplay from './Assets/Img/Googleplay.png'
import Paypal from './Assets/Img/Paypal.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
        <div className='footer'>
            <div className='paymentMethod'>
                <h4>Métodos De Pago</h4>
                <div className='paymentMethod_cards'>
                    <div className='paymentMethod_visa'><img src={Visa} alt="Visa" /></div>
                    <div className='paymentMethod_mastercard'><img src={Mastercard} alt="Master Card" /></div>
                </div>
                <div className='paymentMethod_paypal'><img src={Paypal} alt="Paypal" /></div>
            </div>
            <div className='apps'>
                <h4>Descarga Buestro App</h4>
                <div className='apps_cards'>
                    <div className='apps_appstore'><img src={Appstore} alt="App Store" /></div>
                    <div className='apps_googleplay'><img src={Googleplay} alt="Google Play" /></div>
                </div>
            </div>
            <div className='aboutUs'>
                <h4>Sobre Nosotros</h4>
                <div className='aboutUs_p'>
                    <p>Vive la experiencia Wellezy con la única aplicación en el mundo en la que tienes todo a tu alcance.</p>
                </div>
                <Link to='/aboutus'>Ver Más</Link>
            </div>
            <div className='moreInfo'>
                <div className='moreInfo_social'>
                    <a href='https://www.facebook.com/Wellezy'>
                        <Facebook size="45" color="white"/>
                    </a>
                    <a href='https://www.instagram.com/wellezysurgery/'>
                        <Instagram size="45" color="white"/>
                    </a>
                    <a href='https://www.youtube.com/channel/UCuOdVFus4lvrTVyapEiKm1A'>
                        <Youtube size="45" color="white"/>
                    </a>
                    <a href="https://api.whatsapp.com/send/?phone=3188088170&text&type=phone_number&app_absent=0">
                        <Whatsapp size="45" color="white"/>
                    </a>
                </div>
                <div className='moreInfo_text'>
                    <p>Av. El Poblado #5A-113, Medellin, Colombia</p>
                    <a href='https://api.whatsapp.com/send/?phone=3188088170&text&type=phone_number&app_absent=0' className='moreInfo_whatsapp'>WhatsApp</a>
                    <a href='https://api.whatsapp.com/send/?phone=3188088170&text&type=phone_number&app_absent=0'>+57 318 8088170</a>
                    <p className='moreInfo_mail'>contact@wellezy.com</p>
                </div>
            </div>
        </div>
        <p style={{ backgroundColor: '#00335A', color: 'white', fontFamily: 'Inter', fontWeight: 200, height: '80px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>© Wellezy - All rights reserved PDT agencia</p>
    </div>
  )
}

export default Footer