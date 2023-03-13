import { useState } from "react";

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
      className={`grid grid-cols-[90%,10%] p-4 bg-gray-700 border-b border-solid border-gray-600 `}
    >
      <div>
        <div
          className={`grid grid-cols-[3%,19.4%,19.4%,19.4%,19.4%,19.4%,] ${
            completed && "line-through"
          } items-center`}
        >
          {completed ? (
            <div
              onClick={() => handleSetComplete(id, completed)}
              className="bg-green-700 p-1 rounded-full cursor-pointer"
            >
              <img
                className="h-4 w-4 "
                src="/check-icon.svg"
                alt="Check Icon"
              />
            </div>
          ) : (
            <div
              onClick={() => handleSetComplete(id, completed)}
              className={`border border-gray-500 border-solid p-3 rounded-full cursor-pointer`}
            ></div>
          )}

          {!isEditing ? (
            <>
              <div className="flex items-center text-center max-h-24 overflow-auto justify-center">
                {title}
              </div>
              <div className="flex items-center text-center justify-center break-words max-h-24 w-full overflow-x-auto ">
                {description}
              </div>
              <div className="flex items-center text-center justify-center">
                {assignee}
              </div>
              <div className="flex items-center text-center justify-center">
                {dueDate}
              </div>
              <div className="flex items-center text-center justify-center">
                {dateString}
              </div>
            </>
          ) : (
            <>
              <div className="flex justify-center">
                <input
                  className="bg-gray-800 ml-2 mb-2 w-full"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                />
              </div>
              <div className="flex justify-center">
                <input
                  className="bg-gray-800 ml-3 mb-2 w-full"
                  value={newDescription}
                  onChange={(e) => setNewDescription(e.target.value)}
                />
              </div>
              <div className="flex justify-center">
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
              <div className="flex justify-center">
                <input
                  className="bg-gray-800 ml-3 mb-2 w-2/3"
                  value={newDueDate}
                  onChange={(e) => setNewDueDate(e.target.value)}
                />
              </div>
              <div className="flex justify-center">
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
      <div className="flex justify-end gap-3">
        <button onClick={handleEdit}>Edit</button>
        <div className="flex justify-center items-center pt-1">
          <img
            onClick={() => handleDelete(id)}
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
