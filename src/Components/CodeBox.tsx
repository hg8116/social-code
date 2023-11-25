import { FC, useCallback, useState } from "react"
import CodeMirror, { Extension } from "@uiw/react-codemirror"
import { javascript } from "@codemirror/lang-javascript"
import { themes } from "../utils/Themes"
import EditorSettings from "./EditorSettings"

interface CodeBoxProps {
  printRef: React.RefObject<HTMLDivElement>
}

const CodeBox: FC<CodeBoxProps> = ({printRef}) => {
  const [value, setValue] = useState<string>('// Code here')
  const [editorTheme, setEditorTheme] = useState<Extension>(themes[0].libName)
  const [fontSize, setFontSize] = useState<string>("16px")
  const [height, setHeight] = useState<string>("150px")
  const [width, setWidth] = useState<string>("300px")
  const [fontFamily, setFontFamily] = useState<string>("monospace")

  const onChange = useCallback((val: string): void => {
    setValue(val)
  }, [])


  return (
    <div>
      <EditorSettings
        fontSize={fontSize}
        theme={editorTheme}
        height={height}
        width={width}
        fontFamily={fontFamily}
        onFontSizeChange={setFontSize}
        onThemeChange={setEditorTheme}
        onHeightChange={setHeight}
        onWidthChange={setWidth}
        onFontFamilyChange={setFontFamily}
      />
      <div ref={printRef}>
      <CodeMirror
        value={value}
        theme={editorTheme}
        minHeight={height}
        minWidth={width}
        extensions={[javascript({ jsx: true })]}
        onChange={onChange}
        style={{ fontSize: fontSize, fontFamily: fontFamily}}
      />
      </div>
    </div>
  )
}

export default CodeBox
