import React from 'react'
import Appnav from './Appnav'
import Nav from './Nav'
import MobileNav from './MobileNav'
import { useContext } from 'react'
import { DataContext } from '../context/DataContext'

const Layout = ({children}) => {
	const {showMobileNav,setShowMobileNav}=useContext(DataContext)
  return (
	<div>
		{showMobileNav&&<MobileNav />}
		<Nav />
		<div className="mt-8 md:flex">
			<Appnav />
			{children}
		</div>
	</div>
  )
}

export default Layout