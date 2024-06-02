import { useState } from "react";
import { FilterDropdownButton } from "./FilterDropdownButton";
import AnimateHeight, { Height } from 'react-animate-height';

export const FilterDropdownWrapper = ( { title, filterId, buttons }: { title:string, filterId:string, buttons:any[] }) => {
  
  const [open, setOpen] = useState(true);
  const [height, setHeight] = useState<Height>('auto');

  const handleDropdownToggle = () => {
    setOpen(!open);
    setHeight(height === 0 ? 'auto' : 0);
  };
  
  
  return (
    <div className="filter-dropdown">

      <button className="filter-dropdown-btn show" data-activate-dropdown={ filterId } onClick={ handleDropdownToggle }>
        <span>{ title }</span>
        <img className={"chev" + (open ? " open":"")} src="/src/assets/img/chev-down.svg" alt="chev" />
      </button>

      <AnimateHeight
        duration={500}
        height={height}
        animateOpacity={true}
      >
        <div className="component-container">
              <div className="filters-btn-wrapper" data-filter-dropdown={ filterId }>
                { 
                  buttons.map( ({url, name}) => {
                    return <FilterDropdownButton key={ url } url={ url } name={ name } />;
                  })
                }
              </div>
        </div>
      </AnimateHeight>
      

      
    </div>
  )
}
