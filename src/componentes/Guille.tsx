import React from 'react'

const Guille = () => {

    const nombre: string = 'Guille'
    const edad: number = 35
    const jobs: string[] = ['futbolista', 'camarero', 'ingeniero']
  return (
    
        <>
        <div>{nombre}</div>
        <div>{jobs[1]}</div>
        </>
      
    
  )
}

export default Guille