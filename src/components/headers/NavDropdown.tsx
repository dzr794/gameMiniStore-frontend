import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { NavLinkData } from './data/mainHeaderData';

export const NavDropdown = ( {name, links}: {name:string, links: NavLinkData[]}) => {
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <li className="nav-item dropdown">
      <a className='nav-link dropdown-toggle' role='button' data-bs-toggle="dropdown" aria-expanded="false" onClick={() => setOpenDropdown(!openDropdown)}>
        {name}
      </a>

      <ul className={"dropdown-menu " + (openDropdown?"show":"")} >
        { 
          links.map( (link:NavLinkData) => {
            return (
                <li key={link.name} > 
                  <Link className="dropdown-item" to={link.url}>{link.name}</Link>
                </li>
              )
          })
        }
      </ul>
    </li>
  )
}
