import { useEffect, useState } from 'react';
import personService from './services/persons';
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

//Main component
const App = () => {
  //Array to store persons and their information
  const [persons, setPersons] = useState([])

  //Effect hook to get the data from the server
  useEffect(() => {
    personService
      .getAll()
        .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

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

      personService
        .create(personObject)
          .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          //Clear input boxes
          setNewName('')
          setNewNumber('')
        })
    }
  }

  //Function that deletes person with certain id
  const deletePersonWithId = (id) => {
    const personToBeDeleted = persons.find(person => person.id === id)
    if(window.confirm(`Delete ${personToBeDeleted.name}`)){
      personService
      .deletePerson(id)
        .then(() => {
          setPersons(persons.filter(person => person.id !== id))
        })
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

      <Persons filterPersons={filterPersons} deletePerson={deletePersonWithId}/>
    </div>
  )
}

export default App