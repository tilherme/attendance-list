import { useState, useEffect } from 'react';
import { Card } from '../../components/Card'
import './styles.css'


export function App() {
  const [studantName, setStudantName] = useState<any>();
  const [students, setStudents] = useState<any>([]);
  const [user, setUser] = useState<any>({name: '', avatar: '',});

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
  
  useEffect(() => {
   async function fetcHData(){
    const response = await fetch('https://api.github.com/users/tilherme')
    const data = await response.json();
    setUser({
      name: data.name,
      avatar: data.avatar_url,
    })
  }
  fetcHData()
  },[])

  return (
    <div className="container">
      <header>
        <h1>Lista de presenca</h1>

        <div>
          <strong>{user.name}</strong>
          <img src={user.avatar}alt="" />
        </div>

      </header>
      <input type="text" placeholder="Digite o nome..." onChange={e =>setStudantName(e.target.value)}/>
      <button type="button" onClick={handleAddStudent}>Adicionar</button>
      {
        students.map((student: { name: any; time: any; }) => 
         <Card key={student.time} name={student.name} time={student.time}/>)
       
      }
    </div>
  )
}

