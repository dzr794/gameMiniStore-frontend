

export const Button = ({ id, name, type }: { id: string, name: string, type: 'submit' | 'reset' | 'button' | undefined }) => {
  return (
    <div className="control-group">
      <div className="controls">
        <button type={type} className="btn" id={id}>{name}</button>
      </div>
    </div>
  )
}
