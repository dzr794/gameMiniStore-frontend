import { Link } from "react-router-dom"

export const NavLink = (props: any) => {
  return (
    <li className="nav-item">
      <Link to={ props.url } className="nav-link">
        { props.name }
      </Link>
    </li>
  )
}
