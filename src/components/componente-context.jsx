import React, {useContext, useState} from 'react'

const miContexto = React.createContext(null);

function Componente1() {
  const state = useContext(miContexto);
  
  return (
    <div>
        <h1>
            El token es: {state.token}
        </h1>
        <Componente2></Componente2>
    </div>
  )
}

function Componente2() {
    const state = useContext(miContexto);
    return (
      <div>
        <h2>
            La sesion es: {state.session}
        </h2>
      </div>
    )
  }

  
export default function ComponenteConContexto() {
    const estadoInicial = {
        token: "1233423jkaldjfklajdf",
        session: 1
    };

    const [sessionData, setSessionData] = useState(estadoInicial);

    function actualizarSesion() {
        setSessionData({
            token:"jwtb123123123123123",
            session: sessionData.session +1
        });
    }

    return (
      <div>
        <miContexto.Provider value={sessionData}>
            <h1>Ejemplo de uso de useContext y useState</h1>
            <Componente1></Componente1>
            <button onClick={actualizarSesion}>Actualizar</button>
        </miContexto.Provider>
      </div>
    )
  }
  