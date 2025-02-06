export default function SideBar() {
  return (
    <aside className="w-1/3 px-8 py-16 bg-teal-500 text-green-900 md:w-72 h-full ">
      <h2 className="mb-8 font-bold uppercase md:text-xl">Projects</h2>
      <div>
      <button className="cursor-pointer px-6 py-2 text-teal-500 bg-green-900 hover:bg-green-800 rounded-md text-2xl shadow-lg transition-all duration-150 active:scale-90 active:shadow-md">
  +
</button>
      </div>
    </aside>
  );
}
