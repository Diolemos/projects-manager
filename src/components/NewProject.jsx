import Input from "./Input"
export default function NewProject({onClick}){
    return (<div className="w-[35rem] mt-16" >
        <fieldset className="flex items-center justify-end gap-4 my-4" >
            <button onClick={onClick} className="cursor-pointer bg-teal-600 text-[#EFE9D5] px-6 py-2    active:text-[#d3cebe]  rounded-md shadow-lg transition-all duration-150 active:scale-90 active:shadow-md " >Cancel</button>
            <button className="cursor-pointer text-white   bg-green-900 hover:bg-green-800 px-6 py-2 rounded-md shadow-lg transition-all duration-150 active:scale-90 active:shadow-md" >Save</button>

        </fieldset>
        <div>
            <Input label="Title" />
            <Input label="Description" textarea />
            <Input label="Due Date" />


        </div>    
    </div>)
}