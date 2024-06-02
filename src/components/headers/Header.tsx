import { NavDropdown } from "./NavDropdown";
import { ButtonData } from "../../types";
import { NavLink } from 'react-router-dom';

export const Header = ( { buttons }: { buttons: ButtonData[] }) => {
console.log(buttons);

  return (
  <header id="header">
    <nav className="navbar navbar-expand-lg">
      <div className="container">

        <a className="navbar-brand" href="/">Vapor</a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            { 
              
              buttons.map(({componentType, buttonData}) => {
                switch (componentType) {
                  case 'navLink':
                    if ('url' in buttonData) {
                      return (
                        <li className="nav-item" key={buttonData.name}>
                          <NavLink to={ buttonData.url } className={ ({isActive}) => isActive ? 'active' : '' }>
                            {buttonData.name}
                          </NavLink>
                        </li>
                      )
                    }else{
                      break;
                    }

                  case 'navDropdown':
                    if ( 'links' in buttonData ) {
                      return <NavDropdown key={buttonData.name} name={buttonData.name} links={buttonData.links} />
                    }else{
                      break;
                    }

                  default:
                    return (
                      <li key={buttonData.name} className="nav-item">
                        <a className="nav-link" href={buttonData.url}>default</a>
                      </li>
                    )
                }
              })
            }
          </ul>
          
        </div>
      </div>
    </nav>
  </header>
  )
}
