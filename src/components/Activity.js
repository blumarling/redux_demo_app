import React from 'react'

// se un componente non presenta logica può essere una funzione
// estraggo title dalle props
export default ({title}) => {
  return <div>{title}</div>
}