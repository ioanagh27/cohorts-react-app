import React, { useState, useEffect } from 'react';
import './App.css'

function App() {
  const [students, setStudents] = useState([{name:"Matt"}, {name:"Chicken"}
]);
  const [cohorts, setCohorts] = useState("bhatia");
  const [inputValue, setInputValue] = useState("");

  //fetch data from api

  useEffect(() => {
    fetch(`https://raw.githubusercontent.com/getfutureproof/fp_study_notes_hello_github/main/${cohorts}/roster.json`)
    .then((res) => res.json())
    .then((data) => {
      setStudents(data.students)
    })
  })

  function handleInput(e) {
    setInputValue(e.target.value.toLowerCase())
  }

  function handleSubmit(e) {
    e.preventDefault();
    setCohorts(inputValue)
  }


  return (
    <div className="App">
      <h1>{cohorts}</h1>
      {students.map(student => <p key={student.name}>{student.name}</p>)}
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleInput} value={inputValue}/>
        <input type="submit"/>
      </form>
    </div>
    
  )
}

export default App
