import Articles from "./Articles"
import Aside from "./Aside"

function Main() {
  return (
    <div className="container mx-auto h-full bg-amber-400 flex flex-col md:flex md:flex-row">
      <Articles/>
      <Aside/>
    </div>
  )
}

export default Main