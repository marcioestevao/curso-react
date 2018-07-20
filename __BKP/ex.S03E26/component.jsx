import React from 'react'

//**** SITUAÇÃO 1 ****/
// const Primeiro = props => (
//     <h1>Primeiro Component!</h1>
// )

// const Segundo = props => (
//     <h1>Segundo Component!</h1>
// )

// export{Primeiro, Segundo}

//**** SITUAÇÃO 2 ****/
//No caso abaixo, no index, deve-se referenciar assim:
//import {Primeiro, Segundo } from './component'

// export const Primeiro = props => (
//     <h1>Primeiro Component!</h1>
// )

// export const Segundo = props => (
//     <h1>Segundo Component!</h1>
// )

//export{Primeiro, Segundo}

//**** SITUAÇÃO 3 ****/
//No caso abaixo, no index, deve-se referenciar assim:
//import Primeiro, { Segundo } from './component'
//Obs.: 
//  1 - O component que estiver exposto como default, deverá ser referenciado com qualquer nome e fora dos parenteses
//  2 - O component que estiver exposto com um nome, deverá ser referenciado exatamente através do nome exposto

export default props => (
    <h1>Primeiro Component!</h1>
)

export const Segundo = props => <h1>Segundo Component!</h1>
