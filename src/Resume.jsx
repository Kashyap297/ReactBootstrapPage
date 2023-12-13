import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './common.css'
import Header from './Header';
import Mainbanner from './Mainbanner';
import Mainmenu from './Mainmenu';
import About from './About';
import Footer from './Footer';

const Resume = () => {
    return (
        <>
            <section className="home-bg">
                <div className="position-relative">
                    <div className="shape"></div>
                </div>
                <div className="position-relative">
                    <div className="mini-shapes">
                        <span className="one"><div className="circle-1 anim_scale"></div></span>
                        <span className="four"><div className="square anim-circle"></div></span>
                        <span className="eight"><div className="circle-1 anim_scale"></div></span>
                        <span className="eleven"><div className="circle-1 anim_scale"></div></span>
                        <span className="fourteen"><div className="circle-1 anim_scale"></div></span>
                        <span className="sixteen"><div className="circle-1 anim_scale"></div></span>
                        <span className="eighteen"><div className="circle-2 anim_scale"></div></span>
                        <span className="nineteen"><div className="circle-1 anim_scale"></div></span>
                        <span className="twenty"><div className="square anim-circle"></div></span>
                    </div>
                    <Header />
                    <Mainbanner />
                    <Mainmenu />
                </div>
                <About />
                <Footer />
            </section>
        </>
    )
}

export default Resume