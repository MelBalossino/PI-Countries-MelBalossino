import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom"
import { Provider } from 'react-redux'


ReactDOM.createRoot(document.getElementById('root')).render(     //aca se ejecuta el metodo de react dom que renderiza el componente app
  <React.StrictMode> 
    <BrowserRouter>                                            
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)


//se busca en el dom -hay un archivo html - un div con id root y dice la aplicacion de react, la voy a meter toda aca adentro!

//REACT  libreria declarativa de JS para construir interfaces de usuarios
//ReactDOM biblioteca de React que se utiliza para renderizar componentes de React en el DOM (Document Object Model) de un navegador web.
// React strictMode => activará las comprobaciones adicionales de React durante el desarrollo
// Browser Router le indica a nuestra aplicacion que vamos a trabajar con rutas