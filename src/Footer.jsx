import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className='py-5'>
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center">
                        <span className='fs-6 para-clr-1'>Designed with love © Marketify</span>
                        <ul className='d-flex justify-content-between align-items-center gap-4'>
                            <li className='fs-6 para-clr-1'>Terms & Condition</li>
                            <li className='fs-6 para-clr-1'>Privacy Policy</li>
                            <li className='fs-6 para-clr-1'>Login</li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer