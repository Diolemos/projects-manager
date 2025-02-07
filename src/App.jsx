
import './App.css'
import NewProject from './components/NewProject'
import NoProjectSelected from './components/NoProjectSelected'
import SideBar from './components/SideBar'

function App() {
 return(<main className=' bg-[#EFE9D5] h-screen my-8 flex gap-8' >
  <SideBar/>
  {/* <NewProject/> */}
  <NoProjectSelected/>
 </main>)
}

export default App
