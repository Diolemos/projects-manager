import NewTask from "./NewTask";

export default function Tasks(){
    return (<section>
        <h2 className="text-2xl font-bold text-green-700 mb-6" >Tasks</h2>
        <NewTask />
        <p className="text-green-800 my-4" >No Tasks</p>
        <ul></ul>
    </section>)
}