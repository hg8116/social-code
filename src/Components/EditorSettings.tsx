import { FC, useCallback } from "react"
import { Extension } from "@uiw/react-codemirror"
import { themes } from "../utils/Themes"
import { fontFamilies } from "../utils/Fonts"

interface EditorSettingsProps {
  fontSize: string
  height: string
  width: string
  fontFamily: string
  titleBarStyle: string
  onFontSizeChange: (fontSize: string) => void
  onThemeChange: (theme: Extension) => void
  onHeightChange: (height: string) => void
  onWidthChange: (width: string) => void
  onFontFamilyChange: (font: string) => void
  onTitleBarStyleChange: (style: string) => void
}

const EditorSettings: FC<EditorSettingsProps> = ({
  fontSize,
  height,
  width,
  fontFamily,
  titleBarStyle,
  onFontSizeChange,
  onThemeChange,
  onHeightChange,
  onWidthChange,
  onFontFamilyChange,
  onTitleBarStyleChange,
}) => {
  const handleThemeChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const themeIndex = Number(e.target.value)
      onThemeChange(themes[themeIndex].libName)
    },
    []
  )

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
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
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
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
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
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
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
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state" onChange={handleThemeChange}>
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
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state" onChange={handleTitleBarStyleChange}>
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
      </div>
    </div>
  )
}

export default EditorSettings
