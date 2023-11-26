import { FC, useRef, useState, useEffect } from "react"
import CodeBox from "./CodeBox"
import { themes } from "../utils/Themes"
import { Extension } from "@uiw/react-codemirror"
import EditorSettings from "./EditorSettings"
import domtoimage from "dom-to-image"

const Hero: FC = () => {
  const [editorTheme, setEditorTheme] = useState<Extension>(themes[0].libName)
  const [fontSize, setFontSize] = useState<string>("16")
  const [height, setHeight] = useState<string>("200")
  const [width, setWidth] = useState<string>("600")
  const [fontFamily, setFontFamily] = useState<string>("monospace")
  const [titleBarStyle, setTitleBarStyle] = useState<string>("mac")

  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false)

  const printRef = useRef<HTMLDivElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const handleDownloadImage = async (format: "png" | "jpeg" | "svg") => {
    const element = printRef.current
    if (!element) return

    let dataUrl
    switch (format) {
      case "png":
        dataUrl = await domtoimage.toPng(element)
        break
      case "jpeg":
        dataUrl = await domtoimage.toJpeg(element)
        break
      case "svg":
        dataUrl = await domtoimage.toSvg(element)
        break
      default:
        throw new Error(`Unsupported format: ${format}`)
    }

    const link = document.createElement("a")
    link.download = `social-code.${format}`
    link.href = dataUrl
    link.click()
  }

  useEffect(() => {
    const closeDropdown = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
  
    if (isDropdownOpen) {
      document.addEventListener('mousedown', closeDropdown);
    } else {
      document.removeEventListener('mousedown', closeDropdown);
    }
  
    return () => {
      document.removeEventListener('mousedown', closeDropdown);
    };
  }, [isDropdownOpen]);

  return (
    <div className="flex flex-col justify-evenly items-center flex-grow">
      <EditorSettings
        fontSize={fontSize}
        height={height}
        width={width}
        fontFamily={fontFamily}
        titleBarStyle={titleBarStyle}
        onFontSizeChange={setFontSize}
        onThemeChange={setEditorTheme}
        onHeightChange={setHeight}
        onWidthChange={setWidth}
        onFontFamilyChange={setFontFamily}
        onTitleBarStyleChange={setTitleBarStyle}
      />
      <div className="border-2 border-dashed border-blue-600">
        <div
          className=" bg-white-200 flex justify-center items-center px-20 py-10"
          ref={printRef}>
          <CodeBox
            fontSize={fontSize}
            theme={editorTheme}
            height={height}
            width={width}
            fontFamily={fontFamily}
            titleBarStyle={titleBarStyle}
          />
        </div>
      </div>
      <div>
        <div className="flex flex-row items-center gap-0.5 text-[white]">
          <div
            className="text-sm leading-5 font-medium bg-gray-800 h-10 mb-2 pl-5 pr-4 py-2.5 rounded-[20px_0px_0px_20px] hover:bg-gray-900 cursor-pointer"
            onClick={() => handleDownloadImage("png")}>
            Download
          </div>
          <div
            className="text-sm leading-5 font-medium bg-gray-800 h-10 flex items-center mb-2 pl-1 pr-3 py-2.5 rounded-[0px_20px_20px_0px] hover:bg-gray-900 cursor-pointer relative"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
            {isDropdownOpen && (
              <div ref={dropdownRef} className="absolute bg-white text-black rounded mt-2 w-48 top-full left-0 border-2">
                <p
                  className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => {
                    handleDownloadImage("png")
                    setIsDropdownOpen(false)
                  }}>
                  Download as PNG
                </p>
                <p
                  className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => {
                    handleDownloadImage("svg")
                    setIsDropdownOpen(false)
                  }}>
                  Download as SVG
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
