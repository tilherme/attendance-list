// import React, {useState} from 'react';
import { Card } from '../../components/Card'
import './styles.css'
import { useState } from 'react';

export function App() {
  const [studantName, setStudantName] = useState<any>();
  return (
    <div className="container">
      <h1>Nome: {studantName}</h1>
      <input type="text" placeholder="Digite o nome..." onChange={e =>setStudantName(e.target.value)}/>
      <button type="button">Adicionar</button>
      < Card name="Mateus" time="11:00:00"/>
      < Card name="Gui" time="11:40:00"/>
    </div>
  )
}

