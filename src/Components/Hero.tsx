import { FC, useRef } from "react"
import CodeBox from "./CodeBox"
import html2canvas from "html2canvas"

const Hero: FC = () => {
  const printRef = useRef<HTMLDivElement>(null)

  const handleDownloadImage = async () => {
    const element = printRef.current;
    if(!element) return
    const canvas = await html2canvas(element)
    const data = canvas.toDataURL('image/png')
    const link = document.createElement('a')
    if(typeof link.download === 'string'){
      link.href = data
      link.download = 'img.jpg'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
    else{
      window.open(data)
    }
  }


  return (
    <div className="flex flex-col justify-center items-center flex-grow">
      <div className="border-2 border-dashed border-blue-800 bg-gray-200 flex justify-center items-center px-20 py-10">
        <CodeBox printRef={printRef}/>
      </div>
      <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" onClick={handleDownloadImage}>Download Image</button>
    </div>
  )
}

export default Hero
