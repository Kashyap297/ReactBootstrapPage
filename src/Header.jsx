import React from 'react'
import './common.css'
import logo from './assets/images/logo.png'
import fb from './assets/images/facebook.png'
import twitter from './assets/images/twitter.png'
import yt from './assets/images/youtube.png'
import insta from './assets/images/instagram.png'
import Mainbanner from './Mainbanner'

const Header = () => {
    return (
        <>
            <div className="position-relative">
                <div className="container">
                    <header className="d-flex justify-content-between align-items-center py-4">
                        <div className="logo">
                            <img src={logo} alt="" />
                        </div>
                        <div className="logo-aside d-flex align-items-center">
                            <ul className="social-icons d-flex align-items-center m-0">
                                <li className='px-2'><img src={fb} alt="" /></li>
                                <li className='px-2'><img src={twitter} alt="" /></li>
                                <li className='px-2'><img src={yt} alt="" /></li>
                                <li className='px-2'><img src={insta} alt="" /></li>
                            </ul>
                            <button className='ms-4 me-2'>
                                Download CV
                            </button>
                        </div>
                    </header>
                </div>
            </div>
        </>
    )
}

export default Header