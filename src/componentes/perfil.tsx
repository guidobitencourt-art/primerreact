import './perfil.css'

const Perfil = () => {

        const nameUser = 'Guilherme'
        const profession: string = 'Fullstack Developer'
        const completedModules: number = 3
        const isActive: boolean = true
  return (
    <div className='card-profile'>
        <h2 className='name'>{nameUser} </h2>
        <p className='profession'>{profession}</p>
        <p>Modulos restantes para graduarse: {5 - completedModules}</p>

        {isActive ? <span className='tag-state'>En linea</span> : null}
    </div>
  )
}

export default Perfil