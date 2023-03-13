import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
const notifySuccess = () => toast.success("Task successfully added");
const notifyError = () => toast.error("Something is missing");

const TodoInput = ({ addTodo, employeeNames }) => {
  const fullName = employeeNames;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [assignee, setAssignee] = useState(fullName[0]);
  const [dueDate, setDueDate] = useState("");

  const handleAddTodo = () => {
    if (
      fullName !== "" &&
      description !== "" &&
      assignee !== "" &&
      dueDate !== ""
    ) {
      addTodo(title, description, assignee, dueDate);
      setTitle("");
      setDescription("");
      setAssignee(assignee);
      setDueDate("");
      notifySuccess();
    } else notifyError();
  };

  return (
    <div className="mt-6 relative flex flex-col justify-center w-full">
      <input
        className="focus:shadow-lg font-Inter focus:shadow-blue-800 pl-12 w-full py-4 my-2 bg-gray-700 rounded-xl outline-none transition-all duration-300 ease-in-out"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <input
        className="focus:shadow-lg font-Inter focus:shadow-blue-800 pl-12 w-full py-4 my-2 bg-gray-700 rounded-xl outline-none transition-all duration-300 ease-in-out"
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />

      <select
        onChange={(e) => setAssignee(e.target.value)}
        className="focus:shadow-lg font-Inter focus:shadow-blue-800 pl-12 w-full py-4 my-2 bg-gray-700 rounded-xl outline-none transition-all duration-300 ease-in-out"
      >
        {fullName.map((name, id) => (
          <option key={id} value={name}>
            {name}
          </option>
        ))}
      </select>
      <input
        className="focus:shadow-lg font-Inter focus:shadow-blue-800 pl-12 w-full py-4 my-2 bg-gray-700 rounded-xl outline-none transition-all duration-300 ease-in-out"
        type="text"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        placeholder="Due date"
      />
      <button
        className="w-1/12 mx-auto mt-2 py-1 text-xl rounded-lg bg-gray-600"
        onClick={handleAddTodo}
      >
        Submit
      </button>
      <Toaster />
    </div>
  );
};

export { TodoInput };
