import { createContext,useContext,useState } from "react"


// export  const DataContext= createContext({})
const DataContext= createContext()
const {Provider}=DataContext

const Dataget=({children,data})=>{
	const [showMobileNav,setShowMobileNav]=useState(false)

	return(
		<Provider value={{showMobileNav,setShowMobileNav}}>
			{children}
		</Provider>
	)
}

const useData=()=>useContext(DataContext)

export {useData,Dataget}



