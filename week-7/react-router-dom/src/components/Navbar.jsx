import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <ul>
            <li>
                <Link path={"/"}>Home</Link>
            </li>
            <li>
                <Link path={"/dashboard"}>Dashboard</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar