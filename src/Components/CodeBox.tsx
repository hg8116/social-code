import { FC, useCallback, useState } from "react"
import CodeMirror, { Extension } from "@uiw/react-codemirror"
import { javascript } from "@codemirror/lang-javascript"

interface CodeBoxProps {
  // printRef: React.RefObject<HTMLDivElement>
  fontSize: string
  theme: Extension
  height: string
  width: string
  fontFamily: string
}

const CodeBox: FC<CodeBoxProps> = ({ fontSize, theme, height, width, fontFamily}) => {
  const [value, setValue] = useState<string>('// Code here')

  const onChange = useCallback((val: string): void => {
    setValue(val)
  }, [])


  return (
    <div className="shadow-2xl shadow-slate-400	">
      <div 
      // ref={printRef}
       >
      <CodeMirror
        value={value}
        theme={theme}
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
