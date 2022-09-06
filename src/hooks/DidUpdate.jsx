import React, { Component, useEffect } from 'react';

export class DidUpdate extends Component {
    
    componentDidUpdate(){
        console.log('====================================');
        console.log("Comportamiento cuando el componente recibe nuevos props o cambio en su estado privado: DidUpdate ");
        console.log('====================================');
    }
    
    render() {
        return (
            <div>
                <h1>DidUpdate</h1>            
            </div>
        );
    }
}


export const DidUpdateHook = () => {
    useEffect(() => {
        console.log("Desde Hook");
        console.log("Comportamiento cuando el componente recibe nuevos props o cambio en su estado privado: DidUpdate ");
    });

    return (
        <div>
                <h1>DidUpdate</h1>            
        </div>
    );
}


