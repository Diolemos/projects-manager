import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";
export default function NewProject({ onSave, onCancel }) {
  const modalRef = useRef();

  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  const handleSave = () => {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription === "" ||
      enteredDueDate.trim() === ""
    ) {
      //show modal
      modalRef.current.open();
      return;
    }

    onSave({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  };

  return (
    <>
      <Modal ref={modalRef} >
        <h2 className="mb-6 font-bold text-green-800 uppercase md:text-xl">Invalid input</h2>
        <p>Please enter valid data</p>


      </Modal>
      <div className="w-[35rem] mt-16">
        <fieldset className="flex items-center justify-end gap-4 my-4">
          <button 
            onClick={onCancel}
            className="cursor-pointer bg-teal-600 text-[#EFE9D5] px-6 py-2    active:text-[#d3cebe]  rounded-md shadow-lg transition-all duration-150 active:scale-90 active:shadow-md "
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="cursor-pointer text-white   bg-green-900 hover:bg-green-800 px-6 py-2 rounded-md shadow-lg transition-all duration-150 active:scale-90 active:shadow-md"
          >
            Save
          </button>
        </fieldset>
        <div>
          <Input ref={title} label="Title" />
          <Input ref={description} label="Description" textarea />
          <Input ref={dueDate} type="date" label="Due Date" />
        </div>
      </div>
    </>
  );
}
