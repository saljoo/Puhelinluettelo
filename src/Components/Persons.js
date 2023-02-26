//Component to render one person's informations
const Person = ({ name, number }) => {
    return (
      <div>
        {name} {number}
      </div>
    )
}

//Component to render persons' informations
const Persons = (props) => {
    return (
      <div>
        {props.filterPersons.map(person =>
          <Person key={person.name} name={person.name} number={person.number} />
        )}
      </div>
    )
  }

  export default Persons