// import React from 'react'
import logo from '../../assets/logo.png';
import { CartWidget } from "../CartWidget/CartWidget"

export const NavBar = () => {
  return (
    <div>
        <header className="bg-black">
            <div className="flex justify-between items-center mt-0 mb-auto pt-5 max-w-6xl">
                {/* <img src={'./public/react.svg'} alt='LOGO'/> */}
                <img src={logo} alt='logo' className='w-30 h-20'/>

                <nav className="navbar flex justify-center items-center gap-4 text-white">
                    <a href='#' className="cursor-pointer">Indumentaria</a>
                    <a href='#' className="cursor-pointer">Calzados</a>
                    <a href='#' className="cursor-pointer">Accesorios</a>
                </nav>
                <CartWidget/>
            </div>
      </header>
    </div>
  )
}
