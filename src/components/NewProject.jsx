import Input from "./Input"
export default function NewProject(){
    return (<div className="w-[35rem] mt-16" >
        <fieldset className="flex items-center justify-end gap-4 my-4" >
            <button className="cursor-pointer px-6 py-2  text-stone-800  hover:text-stone-950  rounded-md shadow-lg transition-all duration-150 active:scale-90 active:shadow-md " >Cancel</button>
            <button className="cursor-pointer text-white   bg-green-900 hover:bg-green-800 px-6 py-2 rounded-md shadow-lg transition-all duration-150 active:scale-90 active:shadow-md" >Save</button>

        </fieldset>
        <div>
            <Input label="Title" />
            <Input label="Description" textarea />
            <Input label="Due Date" />


        </div>    
    </div>)
}