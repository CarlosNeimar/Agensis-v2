import Contato from "./Landing-section/Contato"
import Hello from "./Landing-section/Hello"
import Sobre from "./Landing-section/Sobre"
import Market from "./Market"

const Landing = () => {
  return (
    <div className="h-screen w-screen max-w-full">
      <Hello />
      <Sobre />
      <Market />
      <Contato />
    </div>
  )
}

export default Landing
