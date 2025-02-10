
import { useState } from 'react'
import './App.css'
import NewProject from './components/NewProject'
import NoProjectSelected from './components/NoProjectSelected'
import SideBar from './components/SideBar'

import ProjectDetails from './components/ProjectDetails'

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
        const handleSelectedProject = (id)=>{
            setProjectState(prev=>{
                return{
                    ...prev,
                    selectedProjectId: id,
                }
            })
        }

        const handleCancelAddProject = ()=>{
            setProjectState(prev=>{
                return{
                    ...prev,
                    selectedProjectId: undefined,
                }
            })
        }


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
    let selectedProject = projectsState.projects.find(project =>project.id === projectsState.selectedProjectId)

    let content =(<ProjectDetails project={selectedProject} />) ;

    if(projectsState.selectedProjectId === null){
        content = (<NewProject onSave={handleAddProject} onCancel={handleCancelAddProject} />)
    }
else if (projectsState.selectedProjectId === undefined){
    content = (<NoProjectSelected onAddProject={handleStartAddProject} />);
}

    console.log(projectsState)
 return(<main className=' bg-[#EFE9D5] h-screen  flex gap-8' >
    <SideBar selectedProjectId={projectsState.selectedProjectId} onSelectProject={handleSelectedProject} onAddProject={handleStartAddProject} projects={projectsState.projects} />
   {content }
 </main>)
}

export default App
