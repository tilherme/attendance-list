// import React, {useState} from 'react';
import { Card } from '../../components/Card'
import './styles.css'
import { useState } from 'react';

export function App() {
  const [studantName, setStudantName] = useState<any>();
  const [students, setStudents] = useState<any>([]);
  function handleAddStudent() {
    const newStudent = {
      name: studantName,
      time: new Date().toLocaleTimeString("pt-br",{
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',

      })
    };
    setStudents((prevState: any) =>[...prevState, newStudent]);

  }


  return (
    <div className="container">
      <h1>Nomes</h1>
      <input type="text" placeholder="Digite o nome..." onChange={e =>setStudantName(e.target.value)}/>
      <button type="button" onClick={handleAddStudent}>Adicionar</button>
      {
        students.map((student: { name: any; time: any; }) =>  <Card name={student.name} time={student.time}/>)
       
      }
     
    </div>
  )
}

