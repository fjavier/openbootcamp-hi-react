/**
 * Ejemplo de componente de tipo clase que dispone de los metodos de ciclo de vida.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class LifeCycleExample extends Component {

    constructor(props) {
        super(props);
        console.log(props);
        console.log('====================================');
        console.log("Constructor");
        console.log('====================================');
    }

    componentWillMount() {
        console.log('====================================');
        console.log("DIDMOUNT: Antes del montaje del componente");
        console.log('====================================');
        
    }

    componentDidMount() {
        console.log('====================================');
        console.log("DIDMOUNT: Antes del montaje del componente");
        console.log('====================================');
    }

    componentWillReceiveProps(nextProps) {
        console.log('====================================');
        console.log("WillReceiveProps: si va a recibir nuevas props");
        console.log('====================================');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('====================================');
        console.log("Sirve para controlar si el componente debe o no actualizarse");
        console.log('====================================');        
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('====================================');
        console.log("WillUpdate: punto justo antes de actualizarse");
        console.log('====================================');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('====================================');
        console.log("DidUpdate: Justo despues de actualizarse");
        console.log('====================================');
    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

