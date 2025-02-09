import noProject from '../assets/project.png'
import Button from './Button'

export default function NoProjectSelected({onAddProject}){
    return(<div className="mt-24 text-center w-2/3">

        <img src={noProject} alt='an empty notepad' className='w-16 h-16 object-contain mx-auto' />
        <h2 className='text-xl font-bold text-stone-500 mt-4 mb-4 my-4 ' >No Project Selected</h2>
        <p className='text-stone-400 mb-4' >Select a Project or get started with a new one</p>

        <div className='mt-8'>
          <Button onClick={onAddProject} >New Project</Button>
        </div>

    </div>)
}