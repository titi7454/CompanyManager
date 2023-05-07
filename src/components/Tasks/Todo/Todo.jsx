import { useState } from "react";
import toast from "react-hot-toast";
const notifyRemoveSuccess = () => toast.success("Task successfully removed");

const Todo = ({
  todo,
  handleSetComplete,
  handleDelete,
  handleUpdate,
  employeeNames,
}) => {
  const { id, title, description, assignee, dueDate, creationDate, completed } =
    todo;
  const fullName = employeeNames;
  const [newTask, setNewTask] = useState();
  const [newDescription, setNewDescription] = useState();
  const [newAssignee, setNewAssignee] = useState();
  const [newDueDate, setNewDueDate] = useState();
  const [isEditing, setIsEditing] = useState(false);

  const dateString = creationDate.toISOString().split("T")[0];

  const handleEdit = () => {
    setNewTask(title);
    setNewDescription(description);
    setNewDueDate(dueDate);
    setNewAssignee(fullName[0]);
    if (isEditing) {
      handleUpdate(id, newTask, newDescription, newAssignee, newDueDate);
    }
    setIsEditing(!isEditing);
  };

  return (
    <div
      className={`grid grid-rows-[90%,10%] lg:grid-cols-[90%,10%] p-4 bg-gray-700 border-b border-solid border-gray-600 `}
    >
      <div>
        <div
          className={`grid lg:grid-cols-[3%,19.4%,19.4%,19.4%,19.4%,19.4%] gap-2 lg:gap-0 ${
            completed && "line-through"
          } items-center`}
        >
          {completed ? (
            <div
              onClick={() => handleSetComplete(id, completed)}
              className="bg-green-700 ml-auto mr-auto w-1/12 lg:w-full p-1 rounded-full cursor-pointer"
            >
              <img
                className="h-4 w-5 lg:w-4 "
                src="/check-icon.svg"
                alt="Check Icon"
              />
            </div>
          ) : (
            <div
              onClick={() => handleSetComplete(id, completed)}
              className={`border border-gray-500 border-solid ml-auto mr-auto w-1/12 lg:w-full p-3 rounded-full cursor-pointer`}
            ></div>
          )}

          {!isEditing ? (
            <>
              <div className="flex flex-col items-center text-center max-h-24 overflow-auto justify-between lg:justify-center">
                <div className="lg:hidden w-full bg-stone-900">Title:</div>
                <div className="text-center">{title}</div>
              </div>
              <div className="flex flex-col items-center text-center justify-between lg:justify-center break-words max-h-24 w-full overflow-x-auto ">
                <div className="lg:hidden w-full bg-stone-900">Description:</div>
                <div className="text-center">{description}</div>
              </div>
              <div className="flex flex-col items-center text-center justify-between lg:justify-center">
                <div className="lg:hidden w-full bg-stone-900">Employee:</div>
                <div className="text-center">{assignee}</div>
              </div>
              <div className="flex flex-col items-center text-center justify-between lg:justify-center">
                <div className="lg:hidden w-full bg-stone-900">Due date:</div>
                <div className="text-center">{dueDate}</div>
              </div>
              <div className="flex flex-col items-center text-center justify-between lg:justify-center">
                <div className="lg:hidden w-full bg-stone-900">Creation date:</div>
                <div className="text-center">{dateString}</div>
              </div>
            </>
          ) : (
            <>
              <div className="flex flex-col items-center text-center justify-between lg:justify-center gap-2">
                <div className="lg:hidden w-full bg-stone-900">Title:</div>
                <input
                  className="bg-gray-800 ml-3 lg:ml-2 mb-2 lg:w-full"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                />
              </div>
              <div className="flex flex-col items-center text-center justify-between lg:justify-center gap-2">
                <div className="lg:hidden w-full bg-stone-900">Description:</div>
                <input
                  className="bg-gray-800 ml-3 mb-2 lg:w-full"
                  value={newDescription}
                  onChange={(e) => setNewDescription(e.target.value)}
                />
              </div>
              <div className="flex flex-col items-center text-center justify-between lg:justify-center gap-2">
                <div className="lg:hidden w-full bg-stone-900">Employee:</div>
                <select
                  onChange={(e) => setNewAssignee(e.target.value)}
                  className="bg-gray-800 ml-3 mb-2 "
                >
                  {fullName.map((name, id) => (
                    <option key={id} value={name}>
                      {name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col items-center text-center justify-between lg:justify-center gap-2">
                <div className="lg:hidden w-full bg-stone-900">Due date:</div>
                <input
                  className="bg-gray-800 ml-3 mb-2 w-2/3"
                  value={newDueDate}
                  onChange={(e) => setNewDueDate(e.target.value)}
                />
              </div>
              <div className="flex flex-col items-center text-center justify-between lg:justify-center gap-2">
                <div className="lg:hidden w-full bg-stone-900">Creation date:</div>
                <input
                  className="bg-gray-800 ml-3 mb-2 w-2/3"
                  value={dateString}
                  disabled={true}
                />
              </div>
            </>
          )}
        </div>
      </div>
      <div className="flex justify-center lg:justify-end gap-3">
        <div className="flex justify-center items-center pt-1">
          <img
            src="/edit-icon.svg"
            alt="Edit Icon"
            className="h-5 w-5 cursor-pointer transition-all duration-300 ease-in"
            onClick={handleEdit}
          />
        </div>
        <div className="flex justify-center items-center pt-1">
          <img
            onClick={() => {
              handleDelete(id);
              notifyRemoveSuccess();
            }}
            className="h-5 w-5 cursor-pointer transition-all duration-300 ease-in"
            src="/close-icon.svg"
            alt="Close Icon"
          />
        </div>
      </div>
    </div>
  );
};

export { Todo };
