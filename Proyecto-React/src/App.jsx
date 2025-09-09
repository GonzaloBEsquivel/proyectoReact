import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const usuario = {
    name: 'Gonzalo',
    age: 41,
    color: '#dba69bff'
  }
  function isUserPaymentOk() {
    return "Pagado 🍻"
  }

  return (
    <>
      <section style = { {backgroundColor: usuario.color}}>

      <h1>Hola Mundo</h1>
      <h2>Bienvenido {usuario.name} al curso de React. Tienes {usuario.age} años</h2>
      <p>Este es tu DashBoard</p>
      <div className="card">
        
        <p>
          El estado del pago de tu servicio es: {isUserPaymentOk()}
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      </section>
    </>
  )
}

export default App
