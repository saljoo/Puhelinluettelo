//Component for rendering the form
const PersonForm = (props) => {
    return (
      <form onSubmit={props.addPerson}>
          <div>
            name: <input
                    type="text"
                    value={props.newName}
                    onChange={props.handleAddName}
                  />
          </div>
          <div>
            number: <input
                      type="tel"
                      value={props.newNumber}
                      onChange={props.handleAddNumber}
                    />
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
    )
  }

  export default PersonForm