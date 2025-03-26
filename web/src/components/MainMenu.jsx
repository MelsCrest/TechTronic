import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function MainMenu() {
  return (
    <nav className="bg-green-300 pr-12 relative">
      <div className='block sm:hidden absolute right-4 top-2'>
        <FontAwesomeIcon icon={faBars}/>
      </div>
      <ul className="hidden sm:flex flex-row gap-12 pt-2">
        <li className="hover:text-lg hover:font-bold hover:underline underline-offset-2">Inicio</li>
        <li className="hover:text-lg hover:font-bold hover:underline underline-offset-2">Blog</li>
        <li className="hover:text-lg hover:font-bold hover:underline underline-offset-2">Productos</li>
        <li className="hover:text-lg hover:font-bold hover:underline underline-offset-2">Sobre nosotros</li>
        <li className="hover:text-lg hover:font-bold hover:underline underline-offset-2">Contacto</li>
      </ul>
    </nav>
  )
}

export default MainMenu