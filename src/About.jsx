import React from 'react'
import me from './assets/images/me.jpg'

const About = () => {
  return (
    <>
      <section className="mt-5">
        <div className="container">
          <div className="me p-3">
            <div className="row align-items-center justify-content-center">
              <div className="col-6">
                <div className="me-pic p-4">
                  <div className="images position-relative">
                    <img src={me} alt="" />
                    <div className="img-detail p-4 text-white">
                      <span className='title-name'>Name</span>
                      <h4 className='fs-6 fw-bold'>Jessica parker</h4>
                      <div className='dott-line mb-2'></div>
                      <span className='title-name'>Birthday</span>
                      <h4 className='fs-6'>April 22, 1990</h4>
                      <div className='dott-line mb-2'></div>
                      <span className='title-name'>Mail</span>
                      <h4 className='fs-6'>hello@jessica.com</h4>
                      <div className='dott-line mb-2'></div>
                      <span className='title-name'>Phone</span>
                      <h4 className='fs-6'>+123 456 7890</h4>
                      <div className='dott-line mb-2'></div>
                      <span className='title-name'>Address</span>
                      <h4 className='fs-6'>20, Bardeshi, Dhaka</h4>
                      <div className='dott-line mb-2'></div>
                      <span className='title-name'>Nationality</span>
                      <h4 className='fs-6'>Bharatiya</h4>
                      <div className='dott-line mb-4'></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="about-content p-4 py-5 ps-5">
                  <span className='theme-clr fw-bold'>About Me</span>
                  <h1 className='text-white fw-bolder my-2 fs-47'>World leading UI/UX designer</h1>
                  <p className='fs-4 my-4 para-clr-1'>A passionate UI/UX Designer and Web Developer based In NYC, USA</p>
                  <p className='fs-5 mt-3 para-clr pe-5'>Hi! My name is Jessica Parker. I am UI/UX designer, and I'm very passionate and dedicated to my work. With 20 years experience as a professional graphic designer, I have acquired the skills and knowledge necessary to make your project a success.</p>
                  <button className='mt-5 me-2'>
                    Download CV
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About