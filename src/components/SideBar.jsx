import Button from "./Button";

export default function SideBar({onAddProject,projects, onSelectProject, selectedProjectId}) {
  return (
    <aside className="w-1/3 px-8 py-18 bg-teal-600 text-green-900 md:w-72 h-full ">
      <h2 className="mb-8 font-bold uppercase md:text-xl">Projects</h2>
      <div>
      <Button onClick={onAddProject}  >+</Button>
      </div>
      <ul className="mt-6" >
  {projects.map(project =>{
      let cssClasses = "cursor-pointer w-full text-left px-2 py-1 rounded-sm my-1  "
      if (project.id === selectedProjectId){
        cssClasses += ' '
      }else{
        cssClasses += ' bg-green-900 hover:bg-green-800 text-stone-100'
      }
    return (
    <li key={project.id}>
      <button onClick={()=>onSelectProject(project.id)} 
      className="cursor-pointer w-full text-left px-2 py-1 rounded-sm my-1 bg-green-900 hover:bg-green-800 text-stone-100 " >
        {project.title}
      </button>
    </li>
  )
  } )}
</ul>
    </aside>
  );
}
