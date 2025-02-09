export default function Button({children,onClick, ...props}){
    return(
        <button onClick={onClick}  className="cursor-pointer px-6 py-2 rounded-md text-stone-100 hover:text-teal-100 bg-green-900 hover:bg-green-800  text-2xl shadow-lg transition-all duration-150 active:scale-90 active:shadow-md" {...props}>
        {children}
      </button>
    )
}