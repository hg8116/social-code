import { FC, useCallback } from 'react'
import { Extension } from "@uiw/react-codemirror"
import { themes } from "../utils/Themes"
import { fontFamilies } from '../utils/Fonts'

interface EditorSettingsProps{
    fontSize: string
    height: string
    width: string
    fontFamily: string
    onFontSizeChange: (fontSize: string) => void
    onThemeChange: (theme: Extension) => void
    onHeightChange: (height: string) => void
    onWidthChange: (width: string) => void
    onFontFamilyChange: (font: string) => void
}

const EditorSettings : FC<EditorSettingsProps> = ({
    fontSize,
    height,
    width,
    fontFamily,
    onFontSizeChange,
    onThemeChange,
    onHeightChange,
    onWidthChange,
    onFontFamilyChange
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
          onFontFamilyChange(e.target.value);
        },
        [onFontFamilyChange]
      );

  return (
    <div>
      <label>
        Font size:
        <input type="text" value={fontSize} onChange={(e) => onFontSizeChange(e.target.value)} />
      </label>
      <label>
        Theme:
        <select onChange={handleThemeChange}>
          {themes.map((theme, index) => (
            <option key={index} value={index}>
              {theme.name}
            </option>
          ))}
        </select>
      </label>
      {/* <label>
        Font family:
        <select value={fontFamily} onChange={handleFontFamilyChange}>
          {fontFamilies.map((font, index) => (
            <option key={index} value={font}>
              {font}
            </option>
          ))}
        </select>
      </label> */}
      <label>
        Height:
        <input type="text" value={height} onChange={(e) => onHeightChange(e.target.value)} />
      </label>
      <label>
        Width:
        <input type="text" value={width} onChange={(e) => onWidthChange(e.target.value)} />
      </label>
    </div>
  )
}

export default EditorSettings