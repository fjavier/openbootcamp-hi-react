import React, {useState} from 'react'

export default function EjemploHook() {
    const [contador, setcontador] = useState(0);
    const [persona, setpersona] = useState({
        nombre: "Francisco",
        email: "f@correo.com"
    });


    function incrementarContador() {
        setcontador(contador+1);
    }

    function actualizarPersona() {
        setpersona({
            nombre: "Juan",
            email: "juan@gmail.com"
        });
    }
  return (
    <div>
        <h1>Contador: {contador}</h1>
        <h2>Persona: {persona.nombre}</h2>
        <button onClick={incrementarContador}>Incrementar contador</button>
        <button onClick={actualizarPersona}>Actualizar persona</button>
    </div>
  )
}
