export default function input({label,textarea,...props}){
    return (
        <label >
            {label}
           { textarea ? <textarea {...props} /> : <input {...props} />}
        </label>
    )
}