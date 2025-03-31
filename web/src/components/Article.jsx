import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'

function Article({category, date, title, text}) {
  return (
    <article className='p-4 border-2 rounded-md mb-5'>
      <div className='flex flex-row gap-6'>
        <p className='bg-black text-white px-2 rounded-full'>{category}</p>
        <p><FontAwesomeIcon icon={faCalendarDays} /> {date}</p>
      </div>
      <h2 className='text-lg font-bold py-2'>{title}</h2>
      <p>{text}</p>
      <p className='py-2'>Leer más &gt;</p>
    </article>
  )
}

export default Article