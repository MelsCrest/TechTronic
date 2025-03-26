import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt } from '@fortawesome/free-solid-svg-icons'
import MainMenu from './MainMenu'

function Header() {
  return (
    <header>
      <h1 className='text-lg font-bold'>
        <FontAwesomeIcon icon={faBolt} />
        Blog de TechTronic
      </h1>
      <MainMenu/>
      <button type="button" className='text-white bg-black rounded-lg py-2 px-4'>Tienda</button>
    </header>
  )
}

export default Header