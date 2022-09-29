import React from 'react'
import { NavBar } from '../../molecules/navBar/NavBar'

export const Layout = ({children}: any) => {
  return (
    <div className="container">
      <div className="container__animationStars">
        <NavBar />

        {children}

        <footer className="footer">
          <p>DEVELOPED BY <a href="https://github.com/juancordoba00" target='__blank'>JUAN JOSE CORDOBA</a> ©2022</p>
        </footer>
      </div>
    </div>
  )
}
