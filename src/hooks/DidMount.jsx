import React, { Component, useEffect } from 'react';

export class DidMount extends Component {
    
    componentDidMount(){
        console.log('====================================');
        console.log("Comportamiento antes de que sea añadido al DOM");
        console.log('====================================');
    }

    render() {
        return (
            <div>
                <h1>Didmount</h1>            
            </div>
        );
    }
}


export const  DidMountHook = ()=> {

    //Los corchetes es que se va a utilizar una sola vez
    useEffect(() => {
        console.log("Comportamiento antes de que se renderice");
    }, []);

  return (
    <div>
        <h1>Didmount</h1>     
    </div>
  )
}
