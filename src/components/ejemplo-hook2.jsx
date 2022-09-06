import React,{useState, useRef, useEffect} from 'react'

export default function EjemploHook2() {
    const [contador1, setcontador1] = useState(0);
    const [contador2, setcontador2] = useState(0);

    const referencia = useRef();

    function incrementarContador1() {
        setcontador1(contador1 +1 );
    }

    function incrementarContador2() {
        setcontador2(contador2+1);
    }

    useEffect(() => {
        console.log("Se ejecuto el useEffect generico");
        console.log(referencia);
    });

    useEffect(() => {
        console.log("Se ejecuto el useEffect para la modificacion del contador 1");
        console.log(referencia);
    }, [contador1]);

  return (
    <div>
        <h4 ref={referencia}>Mi referencia</h4>
        <h1>Contador1 : {contador1}</h1>
        <h2>Contador2: {contador2}</h2>
        <button onClick={incrementarContador1} >Contador1 ++</button>
        <button onClick={incrementarContador2} >Contador2 ++</button>
    </div>
  )
}
