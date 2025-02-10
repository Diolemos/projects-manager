export default function NewTask(){

    return (
        <div className="flex items-center gap-4" >
            <input type="text" className="w-64 px-2 py-1 rounded-sm bg-[#d6d0ba]" />
            <button className="cursor-pointer text-stone-100 hover:bg-green-700 bg-green-800 rounded-md py-1 px-3" >+</button>
        </div>
    )
}