
import { useState } from 'react'
import './App.css'
import NewProject from './components/NewProject'
import NoProjectSelected from './components/NoProjectSelected'
import SideBar from './components/SideBar'

function App() {
    const [projectsState, setProjectState] = useState({
        selectedProjectId: undefined,
        projects: []
    })
    const handleStartAddProject =()=>{
        
        setProjectState(prev=>{
            return{
                ...prev,
                selectedProjectId: null,
            }
        });

    }
 return(<main className=' bg-[#EFE9D5] h-screen  flex gap-8' >
    <SideBar onAddProject={handleStartAddProject} />
   {projectsState["selectedProjectId"]===null?<NewProject onClick={null} />:<NoProjectSelected onAddProject={handleStartAddProject} /> }
 </main>)
}

export default App
