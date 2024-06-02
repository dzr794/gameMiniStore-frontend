import { NavLink } from "react-router-dom"

export const FilterDropdownButton = ( { url, name }: {url:string, name:string}) => {
  return (
    <NavLink to={ url } className={({isActive}) => isActive ? 'filter-btn is-selected' : 'filter-btn'} >
      <span>{ name }</span> 
      <img className="chev" src="/src/assets/img/check_mark_white.svg" alt="" />
    </NavLink>
  )
}
