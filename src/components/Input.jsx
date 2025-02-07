export default function input({label,textarea,...props}){
    const styles = "w-full p-1 border-b-2 rounded-sm border-stone-500 bg-stone-100 text-stone-500 focus:outline-none focus:border-stone-800"
    return (
        <div className="{}flex flex-col gap-1 my-4" >
          <label className="text-sm font-bold uppercase text-stone-500"> {label}</label> 
           { textarea ? <textarea className={styles} {...props} /> : <input className={styles} {...props} />}
        </div>
    )
}