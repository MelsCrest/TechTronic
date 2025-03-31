import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun } from '@fortawesome/free-solid-svg-icons'

function Weather() {
  return (
    <div className="grid grid-cols-3 grid-rows-4 gap-2 border-1 rounded-md bg-blue-950 p-5 w-70">
      <div className="col-span-2 row-span-2">
        <p className='text-white text-xl'>Madrid</p>
        <p className='text-white text-sm'>miércoles, 5 de marzo</p>
      </div>
      <div className="col-start-3 row-span-2">
        <p className='text-white text-end'>5:58 PM</p>
      </div>
      <div className="row-start-3 col-span-2 row-span-2 flex gap-2 border-r-2 border-white">
        <div className='bg-blue-900 rounded-full w-15 h-15 flex items-center justify-center'>
          <FontAwesomeIcon icon={faSun} className='text-white text-2xl'/>
        </div>
        <div>
          <p className='text-white'>Sunny</p>
          <p className='text-white text-3xl'>24º</p>
        </div>
      </div>
      <div className="row-start-3 col-start-3 row-span-2 flex flex-col items-end">
        <p className='text-white'>Sensación</p>
        <p className='text-white text-2xl'>23º</p>
      </div>
    </div>
  )
}

export default Weather