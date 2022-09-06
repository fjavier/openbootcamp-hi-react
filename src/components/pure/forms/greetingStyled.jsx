import React, {useState} from 'react';

//Definiendo estilos en constantes:
//? Estilos para usuario logueado
const loggedStyle = {
    color: "blue"
}
//? Estilos para usuario no logueado
const unloggedStyle = {
    color: "tomato",
    fontWeigth: "bold"
}

const GreetingStyled = (props) => {
    const [logged, setlogged] = useState(false);

    const changeState = () => {
        console.log("boton pulsado")
        setlogged(!logged);
    }

    const greetingUser = () => (<p>Hola, {props.name}</p>);
    const pleaseLogin = () => (<p>Por favor logueate</p>);

    return (
        <div style={ logged ? loggedStyle : unloggedStyle }>
           {logged ? greetingUser() : pleaseLogin() }

           <button onClick={changeState}>
                {logged ? "logout" : "login"}
           </button>
        </div>
    );
}

export default GreetingStyled;
