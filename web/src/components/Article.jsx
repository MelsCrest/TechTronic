import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'

function Article() {
  return (
    <article className='p-4 border-2 rounded-md mb-5'>
      <div className='flex flex-row gap-6'>
        <p className='bg-black text-white px-2 rounded-full'>Destacado</p>
        <p><FontAwesomeIcon icon={faCalendarDays} /> Feb 4, 2025</p>
      </div>
      <h2 className='text-lg font-bold py-2'>El futuro de la tecnología wereable en 2025</h2>
      <p>La tecnología vestible evoluciona a un ritmo sin precedentes, con la aparición de nuevas innovaciones que prometen revoucionar la forma en que interactuamos con nuestros dispositivos y controlamos nuestra salud.</p>
      <p className='py-2'>Leer más &gt;</p>
    </article>
  )
}

export default Article