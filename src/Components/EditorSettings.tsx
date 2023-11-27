import { FC, useCallback, useState } from "react"
import { Extension } from "@uiw/react-codemirror"
import { themes } from "../utils/Themes"
import { Sketch } from "@uiw/react-color"
// import { fontFamilies } from "../utils/Fonts"

interface EditorSettingsProps {
  fontSize: string
  height: string
  width: string
  fontFamily: string
  bgColor: string
  bgImage: string | null
  onFontSizeChange: (fontSize: string) => void
  onThemeChange: (theme: Extension) => void
  onHeightChange: (height: string) => void
  onWidthChange: (width: string) => void
  onFontFamilyChange: (font: string) => void
  onTitleBarStyleChange: (style: string) => void
  onBgColorChange: (color: string) => void
  onBgImageChange: (image: string) => void
}

const EditorSettings: FC<EditorSettingsProps> = ({
  fontSize,
  height,
  width,
  // @ts-ignore
  fontFamily,
  bgColor,
  bgImage,
  onFontSizeChange,
  onThemeChange,
  onHeightChange,
  onWidthChange,
  onFontFamilyChange,
  onTitleBarStyleChange,
  onBgColorChange,
  onBgImageChange,

}) => {
  const [isBgSelectOpen, setIsBgSelectOpen] = useState<boolean>(false)
  const [isBgColorSelectOpen, setIsBgColorSelectOpen] = useState<boolean>(true)
  const [isBgImageSelectOpen, setIsBgImageSelectOpen] = useState<boolean>(false)

  const handleThemeChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const themeIndex = Number(e.target.value)
      onThemeChange(themes[themeIndex].libName)
    },
    []
  )

  // @ts-ignore
  const handleFontFamilyChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      onFontFamilyChange(e.target.value)
    },
    [onFontFamilyChange]
  )

  const handleTitleBarStyleChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      onTitleBarStyleChange(e.target.value)
    },
    [onTitleBarStyleChange]
  )

  const HandleBgImageChange = (image: string) => {
    onBgImageChange(image)
  }

  return (
    <div>
      <div className="flex justify-evenly gap-6">
        <div className="flex items-center">
          <div className="">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-full-name">
              Font Size
            </label>
          </div>
          <div className="">
            <input
              className="bg-gray-200 h-11 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              type="text"
              value={fontSize}
              onChange={(e) => onFontSizeChange(e.target.value)}
            />
          </div>
        </div>
        <div className="flex items-center">
          <div className="">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-full-name">
              Height
            </label>
          </div>
          <div className="">
            <input
              className="bg-gray-200 h-11 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              type="text"
              value={height}
              onChange={(e) => onHeightChange(e.target.value)}
            />
          </div>
        </div>
        <div className="flex items-center">
          <div className="">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-full-name">
              Width
            </label>
          </div>
          <div className="">
            <input
              className="bg-gray-200 h-11 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              type="text"
              value={width}
              onChange={(e) => onWidthChange(e.target.value)}
            />
          </div>
        </div>
        <div className="flex items-center">
          <div className="">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-full-name">
              Theme
            </label>
          </div>
          <div className="relative">
            <select
              className="block appearance-none h-11 w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state"
              onChange={handleThemeChange}>
              {themes.map((theme, index) => (
                <option key={index} value={index}>
                  {theme.name.charAt(0).toUpperCase() + theme.name.slice(1)}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <div className="">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-full-name">
              Title Bar
            </label>
          </div>
          <div className="relative">
            <select
              className="block appearance-none h-11 w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state"
              onChange={handleTitleBarStyleChange}>
              <option value="mac">Mac</option>
              <option value="windows">Windows</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <div className="">
            <div>
              <div
                className={`color-picker-box h-11 w-11 rounded border-black border-2 relative`}
                style={{ backgroundColor: bgColor }}
                onClick={() => setIsBgSelectOpen(!isBgSelectOpen)}></div>
              {isBgSelectOpen && (
                <div className="bg-options-container absolute rounded right-20 mt-3 flex flex-col justify-center items-center bg-blue-50 p-4 border-2">
                  <div className="bg-button-container flex flex-row flex-1 gap-1 mb-2 border-black">
                    <div
                      className={`color-button flex justify-center items-center border-black border-2 px-7 rounded hover:cursor-pointer hover:bg-black hover:text-white select-none ${isBgColorSelectOpen && "bg-black"} ${isBgColorSelectOpen && "text-white"}`}
                      onClick={() => {
                        setIsBgColorSelectOpen(true)
                        setIsBgImageSelectOpen(false)
                      }}>
                      Color
                    </div>
                    <div
                      className={`image-button flex justify-center items-center border-black border-2 px-7 rounded hover:cursor-pointer hover:bg-black hover:text-white select-none ${isBgImageSelectOpen && "bg-black"} ${isBgImageSelectOpen && "text-white"}`}
                      onClick={() => {
                        setIsBgColorSelectOpen(false)
                        setIsBgImageSelectOpen(true)
                      }}>
                      Image
                    </div>
                  </div>
                  {isBgColorSelectOpen && (
                    <Sketch
                      className="flex-1"
                      color={bgColor}
                      onChange={(color) => {
                        onBgColorChange(color.hex)
                        console.log(color.hex)
                      }}
                    />
                  )}
                  {isBgImageSelectOpen && (
                    <div className="flex flex-col gap-4 justify-center items-center">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(event) => {
                          if (event.target.files === null) return
                          const file = event.target.files[0]
                          if (file) {
                            const reader = new FileReader()
                            reader.onloadend = () => {
                              HandleBgImageChange(reader.result as string)
                            }
                            reader.readAsDataURL(file)
                          }
                        }}
                      />
                      {bgImage && (
                        <div
                          className="bg-image-preview h-32 w-64 rounded border-black border-2"
                          style={{ backgroundImage: `url(${bgImage})` }}></div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditorSettings
