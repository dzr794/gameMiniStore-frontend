

export const Input = ({ id, name, type }: { id:string, name:string, type:string }) => {
  return (
    <div className="control-group">
      <label className="control-label" htmlFor={ id }>{ name }</label>
      <div className="controls">
        <input type={ type } id={ id } placeholder={ name } />
      </div>
    </div>
  )
}
