
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
    const handleStartAddProject =()=>{ //renders form
        
        setProjectState(prev=>{
            return{
                ...prev,
                selectedProjectId: null,
            }
        });  }
    const handleAddProject= (projectData)=>{
          setProjectState(prev=>{
            const projectId = Math.random();
            const newProject = {
                ...projectData,
                id: projectId
            }
            
            return {
                ...prev,
                selectedProjectId: undefined,
                projects:[...prev.projects, newProject ]
            }
          })  
    }
    console.log(projectsState)
 return(<main className=' bg-[#EFE9D5] h-screen  flex gap-8' >
    <SideBar onAddProject={handleStartAddProject} projects={projectsState.projects} />
   {projectsState["selectedProjectId"]===null?<NewProject onSave={handleAddProject} />:<NoProjectSelected onAddProject={handleStartAddProject} /> }
 </main>)
}

export default App
