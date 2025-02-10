import deleteIcon from "/src/assets/delete.svg";
export default function ProjectDetails({ project, onDeleteProject }) {
  const formattedDate = new Date(project.dueDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return (
    <div className="w-[35rem] mt-16">
    <header className="pb-4 mb-4 border-b-2 border-stone-300">
      {/* This flex container ensures the title is on the left and button on the right */}
      <div className="flex w-full items-center justify-between">
        <h1 className="text-3xl font-bold text-green-800 mb-2">
          {project.title}
        </h1>
        <button onClick={onDeleteProject} className="cursor-pointer  transition-transform duration-200 hover:scale-110 active:scale-90">
  <img src={deleteIcon} className="w-6 h-6 " alt="Delete" />
</button>      </div>
      <p className="mb-4 text-stone-400">{formattedDate}</p>
      <p className="text-stone-600 whitespace-pre-wrap">{project.description}</p>
    </header>
    tasks
  </div>
  );
}
