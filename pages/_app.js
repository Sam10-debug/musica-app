import '../styles/globals.css'
import Layout from './Layout'
import { DataContext } from '../context/DataContext'
import { useState } from 'react'

function MyApp({ Component, pageProps }) {
  const [showMobileNav,setShowMobileNav]=useState(false)
 
  return  <DataContext.Provider value={{showMobileNav,setShowMobileNav}}><Layout><Component {...pageProps} /></Layout></DataContext.Provider >
}

export default MyApp
