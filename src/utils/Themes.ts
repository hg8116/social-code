import {
    aura,
    copilot,
    abcdef,
    abyss,
    androidstudio,
    atomone,
    bbedit,
    bespin,
    dracula,
    darcula,
    eclipse,
    githubDark,
    kimbie,
  } from "@uiw/codemirror-themes-all"
  import { Extension } from "@uiw/react-codemirror"


  type Theme = {
    libName: Extension
    name: string
  }
  
  export const themes: Theme[] = [
    { libName: aura, name: "aura" },
    { libName: copilot, name: "copilot" },
    { libName: abcdef, name: "abcdef" },
    { libName: abyss, name: "abyss" },
    { libName: androidstudio, name: "androidstudio" },
    { libName: atomone, name: "atomone" },
    { libName: bbedit, name: "bbedit" },
    { libName: bespin, name: "bespin" },
    { libName: dracula, name: "dracula" },
    { libName: darcula, name: "darcula" },
    { libName: eclipse, name: "eclipse" },
    { libName: githubDark, name: "githubDark" },
    { libName: kimbie, name: "kimbie" },
  ]