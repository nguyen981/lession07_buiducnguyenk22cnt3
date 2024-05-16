import React, { createContext, useContext, useState } from 'react'
import BDNuseContext1 from './BDNuseContext1';
export const themeContext = createContext();// tao ngu canh de chia se


export default function BDNuseContext () {
    // state 
    const[theme,setTheme] = useState('red');
    // ham thay dooi theme
    const bdnHandleChange = (toggle)=>{
        setTheme(theme=== 'red'?'blue':'red');
    }
  return (
    <themeContext.Provider value={theme}>
    <div className='alert'>
        <h2> Demo useContext</h2>
        <bdnuseContext1 />
        <button onclick={bdnHandleChange}>change bgcolor</button>
    </div>
    </themeContext.Provider>
  )
}