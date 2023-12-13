import React from 'react'
import './common.css'
import proimg from './assets/images/profile.jpg'

const Mainbanner = () => {
    return (
        <>
            <section className='main-banner py-5'>
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-6">
                            <div className="main-banner-content">
                                    <span className='theme-clr fs-2 fw-bold'>I'm</span>
                                    <h1 className='text-white font-sz fw-bolder my-2'>Jessica <br />Parker</h1>
                                    <p className='fs-4 mt-3 para-clr'>A passionate UI/UX Designer and Web Developer based In NYC, USA  </p>
                                <div className="bttn d-flex align-items-center mt-4">
                                    <div className="cir-1"><i class="fa-solid fa-play text-white"></i></div>
                                    <span className='fw-bolder fs-4 ms-4 text-white'>Play Video</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="main-banner-img">
                                <div className="profile-img float-end">
                                    <img src={proimg} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Mainbanner

