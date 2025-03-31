import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

function Search() {
  return (
    <div className='flex flex-col items-center md:items-start'>
      <h3 className='text-xl font-bold pb-5 md:pt-15 md:pb-4'>Búsqueda</h3>
      <div>
        <input type="text" className='border-2 rounded-md mb-10 pl-2 md:px-2 md:py-1' placeholder='Busca por título...' />
        <FontAwesomeIcon icon={faMagnifyingGlass} className='pl-2'/>
      </div>
    </div>
  )
}

export default Search