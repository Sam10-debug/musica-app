import { createContext,useContext,useState } from "react"


// export  const DataContext= createContext({})
const DataContext= createContext()
const {Provider}=DataContext

const Dataget=({children})=>{
	const [showMobileNav,setShowMobileNav]=useState(false)
	
	return(
		<Provider value={{showMobileNav,setShowMobileNav}}>
			{children}
		</Provider>
	)
}

const useData=()=>useContext(DataContext)

export {useData,Dataget}

export async function getStaticProps() {
	const res = await fetch("https://musica-api.up.railway.app/new")
	const data = await res.json()
	return {
	  props: {
		data,
	  }, // will be passed to the page component as props
	}
  }

