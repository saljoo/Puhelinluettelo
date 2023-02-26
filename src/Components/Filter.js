//Component to render filter input box
const Filter = (props) => {
    return (
      <div>
        filter shown with <input
                            type="search"
                            value={props.filterValue}
                            onChange={props.handleAddFilter}
                          />
      </div>
    )
  }

  export default Filter