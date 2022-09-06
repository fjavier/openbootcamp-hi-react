import React, { Component, useEffect } from 'react';

export class WillUnmount extends Component {
    componentWillUnmount(){
        console.log('====================================');
        console.log("Uso de WillUnmount cuando el componente va a desaparecer");
        console.log('====================================');
    }

    render() {
        return (
            <div>
                <h1>WillUnmount</h1>                
            </div>
        );
    }
}



export const WillUnmountHook = () => {
    useEffect(() => {
        //Aqui no ponemos nada
        return () => {
            console.log('====================================');
            console.log("Uso de WillUnmount cuando el componente va a desaparecer desde el hook");
            console.log('====================================');
        };
    }, []);
    return (
        <div>
            <h1>WillUnmountHook</h1>                
        </div>
    );
}

