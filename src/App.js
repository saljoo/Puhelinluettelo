import { useState } from 'react';
import Filter from "./Components/Filter";
import PersonForm from "./Components/PersonForm";
import Persons from "./Components/Persons";

//Main component
const App = () => {
  //Array to store persons and their information
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-1231244' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])

  //Variable to save the value of desired filter
  const [filterValue, setFilterValue] = useState('')

  //Variables for handling name and number additions
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  //Variable to 
  const filterPersons = filterValue.length > 0
    ? persons.filter(person => person.name.toLowerCase().includes(filterValue.toLowerCase()) === true)
    : persons

  //Function to check that person doesn't already exist in the phonebook
  //If new person, add name and number into persons array
  const addPerson = (event) => {
    event.preventDefault()
    if(persons.some(person => person.name === newName)){
      alert(`${newName} is already added to phonebook`)
    } else {
      const personObject = {
        name: newName, number: newNumber
      }
      setPersons(persons.concat(personObject))
      //Clear input boxes
      setNewName('')
      setNewNumber('')
    }
    
  }

  //Set filterValue to be the value of the input box
  const handleAddFilter = (event) => {
    setFilterValue(event.target.value)
  }

  //Set newName to be the value of the input box
  const handleAddName = (event) => {
    setNewName(event.target.value)
  }

  //Set NewNumber to be the value of the input box
  const handleAddNumber = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter filterValue={filterValue} handleAddFilter={handleAddFilter} />

      <h3>Add a new</h3>

      <PersonForm
        addPerson={addPerson} newName={newName} handleAddName={handleAddName}
        newNumber={newNumber} handleAddNumber={handleAddNumber}
      />
      
      <h3>Numbers</h3>

      <Persons filterPersons={filterPersons}/>
    </div>
  )
}

export default App