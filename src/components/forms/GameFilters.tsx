import { FilterDropdownWrapper } from "./FilterDropdownWrapper";


export const GameFilters = ({title, filters}: {title:string, filters:any[]}) => {
  console.log(title);
  console.log(filters);
  
  return (
    <div className="game-filter-wrapper">
      <h3>{ title }</h3>
      {
        filters.map( ({filterId, title, buttons})=> {
          return <FilterDropdownWrapper 
                    key={filterId} 
                    title={title} 
                    filterId={filterId} 
                    buttons={buttons} 
                  />;
        })
      }
      
    </div>
  )
}
