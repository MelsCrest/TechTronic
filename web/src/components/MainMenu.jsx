import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function MainMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleClick = ()=>{
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <nav className="bg-green-300 pr-12 relative">
      <div className='block md:hidden absolute right-4 top-2' onClick={handleClick}>
        <FontAwesomeIcon icon={faBars}/>
      </div>
      <ul className={`flex flex-col items-end gap-6 text-right absolute top-10 right-0 md:flex md:flex-row md:gap-12 md:static pt-2 ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
        <li className="hover:underline underline-offset-2">Inicio</li>
        <li className="hover:underline underline-offset-2">Blog</li>
        <li className="hover:underline underline-offset-2">Productos</li>
        <li className="hover:underline underline-offset-2">Sobre nosotros</li>
        <li className="hover:underline underline-offset-2">Contacto</li>
      </ul>
    </nav>
  )
}

export default MainMenu