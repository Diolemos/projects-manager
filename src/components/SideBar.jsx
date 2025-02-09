import Button from "./Button";

export default function SideBar({onAddProject}) {
  return (
    <aside className="w-1/3 px-8 py-18 bg-teal-600 text-green-900 md:w-72 h-full ">
      <h2 className="mb-8 font-bold uppercase md:text-xl">Projects</h2>
      <div>
      <Button onClick={onAddProject}  >+</Button>
      </div>
    </aside>
  );
}
