import React from 'react'
import BDNuseState from './component/BDNuseState'
import BDNuseEffect from './component/BDNuseEffect'
import BDNuseContex from './component/BDNuseContex'
import './App.css'
export default function App() {
  return (
    <div className='container border mt-3'>
      <h1 className='text-center'>Bui Duc Nguyen - hook</h1>
      <hr/>
      <BDNuseState /> 
      <hr/>
      <BDNuseEffect />
      <hr/>
      <BDNuseContex />
    </div>
  )
}