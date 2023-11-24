import { FC, useCallback, useState, useRef } from "react"
import CodeMirror, { Extension } from "@uiw/react-codemirror"
import { javascript } from "@codemirror/lang-javascript"
import { themes } from "../utils/Themes"
import EditorSettings from "./EditorSettings"
import html2canvas from "html2canvas"

const CodeBox: FC = () => {
  const [value, setValue] = useState<string>('console.log("hello world!")')
  const [editorTheme, setEditorTheme] = useState<Extension>(themes[0].libName)
  const [fontSize, setFontSize] = useState<string>("16px")
  const [height, setHeight] = useState<string>("150px")
  const [width, setWidth] = useState<string>("300px")
  const [fontFamily, setFontFamily] = useState<string>("monospace")

  const printRef = useRef<HTMLDivElement>(null)

  const onChange = useCallback((val: string): void => {
    setValue(val)
  }, [])

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
      <button type="button" onClick={handleDownloadImage}>Download Img</button>
      <div ref={printRef}>
      <CodeMirror
        value={value}
        theme={editorTheme}
        minHeight={height}
        minWidth={width}
        extensions={[javascript({ jsx: true })]}
        onChange={onChange}
        style={{ fontFamily: fontFamily, fontSize: fontSize }}
      />
      </div>
    </div>
  )
}

export default CodeBox
