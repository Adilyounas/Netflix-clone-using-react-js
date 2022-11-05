import React from 'react'
import "../../App.scss"
import { CiSearch } from 'react-icons/ci';
import {Link} from "react-router-dom"
import logo from "../../netflix-logo-0.png"
const Header = () => {
    return (
        <>

            <nav className='navbar'>
                <div className="first_div">
                    <img src={logo} alt="" width={140} />

                    <ul>
                        <li><Link>TV Shows</Link> </li>
                        <li><Link>Movies</Link></li>
                        <li><Link>recently added</Link></li>
                        <li><Link>my list</Link></li>
                    </ul>
                </div>

                <div className="second_div">
                    <CiSearch />
                </div>
            </nav>
        </>
    )
}

export default Header