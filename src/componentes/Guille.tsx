import React from 'react'

const Guille = () => {

    const nombre: string = 'Guille'
    const edad: number = 35
    const jobs: string[] = ['futbolista', 'camarero', 'ingeniero']
  return (
    
        <>
        <div>{nombre}</div>
        <div>{jobs[1]}</div>
        <img src="https://reactjs.org/logo-og.png" alt="React Logo" />
        </>
      
    
  )
}

export default Guille