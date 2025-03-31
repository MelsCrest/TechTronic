import Articles from "./Articles"
import Aside from "./Aside"

function Main() {
  return (
    <div className="container mx-auto h-full flex flex-col md:flex md:flex-row">
      <Articles/>
      <Aside/>
    </div>
  )
}

export default Main