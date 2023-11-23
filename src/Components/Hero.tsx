import { FC } from "react"
import CodeBox from "./CodeBox"

const Hero: FC = () => {
  return (
    <div className="flex justify-center items-center flex-grow">
      <div className="border-2 border-dashed border-blue-800 bg-gray-200 flex justify-center items-center px-20 py-10">
        <CodeBox />
      </div>
    </div>
  )
}

export default Hero
