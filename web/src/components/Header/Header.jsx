import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt } from '@fortawesome/free-solid-svg-icons'
import MainMenu from './MainMenu'

function Header() {
  return (
    <header className='container mx-auto flex flex-row px-5 py-7 border-b-2'>
      <h1 className='text-lg font-bold flex-1 pt-1 -order-2 md:order-0'>
        <FontAwesomeIcon icon={faBolt} />
        Blog de TechTronic
      </h1>
      <MainMenu />
      <button type="button" className='text-white bg-black rounded-lg py-2 px-4 flex 1 -order-1 md:order-0'>Tienda</button>
    </header>
  )
}

export default Header