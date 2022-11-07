import React from 'react'
import Appnav from './Appnav'
import Nav from './Nav'
import MobileNav from './MobileNav'
import {useData} from "../context/DataContext"
import Footer from './Footer'

const Layout = ({children}) => {
	const {showMobileNav}=useData()
  return (
	<div className='relative'>
		{showMobileNav&&<MobileNav />}
		<Nav />
		<div className="mt-8 md:flex">
			<Appnav />
			{children}
		</div>
		<Footer />
	</div>
  )
}

export default Layout