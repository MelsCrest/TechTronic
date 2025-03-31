import Search from "./Widgets/Search"
import Weather from "./Widgets/Weather"

function Aside() {
  return (
      <aside className="w-auto md:w-2/5 lg:w-1/3 bg-green-300 flex flex-col items-center md:items-start">
        <Search/>
        <Weather/>
      </aside>
  )
}

export default Aside