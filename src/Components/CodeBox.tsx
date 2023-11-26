import { FC, useCallback, useState } from "react"
import CodeMirror, { Extension } from "@uiw/react-codemirror"
import { javascript } from "@codemirror/lang-javascript"

interface CodeBoxProps {
  fontSize: string
  theme: Extension
  height: string
  width: string
  fontFamily: string
  titleBarStyle: string
}

const CodeBox: FC<CodeBoxProps> = ({
  fontSize,
  theme,
  height,
  width,
  fontFamily,
  titleBarStyle,
}) => {
  const [value, setValue] = useState<string>("// Code here")

  const onChange = useCallback((val: string): void => {
    setValue(val)
  }, [])

  return (
    <div className="shadow-[5px_5px_0px_0px_rgba(109,40,217)]">
      <div>
        <div
          className={`title-bar relative w-[${width}px] bg-indigo-50 flex items-center justify-between py-[0.4rem] px-3 text-sm border border-gray-400 border-opacity-70 rounded-[4px_4px_0px_0px]`}
          spellCheck="false">
          {titleBarStyle === "mac" ? (
            <div className="mac-logo absolute left-3 flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="54"
                height="14"
                viewBox="0 0 54 14">
                <g fill="none" fillRule="evenodd" transform="translate(1 1)">
                  <circle
                    cx="6"
                    cy="6"
                    r="6"
                    fill="#FF5F56"
                    stroke="#E0443E"
                    strokeWidth=".5"></circle>
                  <circle
                    cx="26"
                    cy="6"
                    r="6"
                    fill="#FFBD2E"
                    stroke="#DEA123"
                    strokeWidth=".5"></circle>
                  <circle
                    cx="46"
                    cy="6"
                    r="6"
                    fill="#27C93F"
                    stroke="#1AAB29"
                    strokeWidth=".5"></circle>
                </g>
              </svg>
            </div>
          ) : null}
          <div className="title-text w-full text-center">
            <div contentEditable className="focus:outline-none inline-block" suppressContentEditableWarning={true} onKeyDown={(event) => {
              if (event.key === "Enter") {
                event.preventDefault()
                event.currentTarget.blur()
              }
            }}>
              Title.cpp
            </div>
          </div>
          {titleBarStyle === "windows" ? (
            <div className="windows-logo absolute right-3 flex justify-center items-center">
              <svg
                width="54"
                height="12"
                viewBox="0 0 58 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1 7H11"
                  stroke="#000"
                  stroke-linecap="round"
                  stroke-linejoin="round"></path>
                <path
                  d="M35 1H25C24.4477 1 24 1.44772 24 2V12C24 12.5523 24.4477 13 25 13H35C35.5523 13 36 12.5523 36 12V2C36 1.44772 35.5523 1 35 1Z"
                  stroke="#000"></path>
                <path
                  d="M47 2L57 12"
                  stroke="#000"
                  stroke-linecap="round"
                  stroke-linejoin="round"></path>
                <path
                  d="M47 12L57 2"
                  stroke="#000"
                  stroke-linecap="round"
                  stroke-linejoin="round"></path>
              </svg>
            </div>
          ) : null}
        </div>
        <CodeMirror
          value={value}
          theme={theme}
          minHeight={height + "px"}
          minWidth={width + "px"}
          extensions={[javascript({ jsx: true })]}
          onChange={onChange}
          style={{ fontSize: fontSize + "px", fontFamily: fontFamily }}
        />
      </div>
    </div>
  )
}

export default CodeBox
