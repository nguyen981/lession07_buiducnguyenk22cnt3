import React, { useContext } from 'react'
import { themeContext } from './BDNuseContex'

export default function BDNuseContext2() {
    const theme = useContext(themeContext);
  return (
    <div className={theme + 'm-3'}>
        <h2>BDNuseContext2</h2>
        <p>
            <b>ma so 2224222</b>
            <b>bui duc nguyen</b>
            <b>k22cnt3</b>
        </p>
        </div>
  )
}