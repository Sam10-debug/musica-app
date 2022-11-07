import '../styles/globals.css'
import Layout from "../components/Layout"
import { Dataget } from '../context/DataContext'

function MyApp({ Component, pageProps }) {

 
  return  <Dataget ><Layout><Component {...pageProps} /></Layout></Dataget >
}

export default MyApp
