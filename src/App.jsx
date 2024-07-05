import { useState } from 'react'
import Name from './Components/Name'
import Card from './Components/Card/Card'
import "./App.css"




function App() {
  


  return (
    <>
      <div className="con">
      <div className="row">
      <Card name="Sajan Sharma" imgsrc="../Assests/image/sajan.jpeg" work="Full Stack Devloper"/>
      <Card name="Shivani shakya" imgsrc="../Assests/image/shi.png" work="Fronted Devloper"/>
      <Card name="Archna Yadav" imgsrc="../Assests/image/archu.png" work="Backend Devloper"/>
      <Card name="Muskan" imgsrc="" work="Fronted Devloper"/>
      
    </div>
      </div>
    </>
  )
}

export default App
