import { useState } from "react";
import toast from "react-hot-toast";
const notifyEmployeeSuccess = () =>
  toast.success("Employee successfully added to the project");
const notifyEmployeeError = () =>
  toast.success("Employee successfully removed from the project");
const notifyEmployeeErrorAdd = () =>
  toast.error("There aren't any more employess to add");
const notifyEmployeeErrorRemove = () =>
  toast.error("You can't remove the last employee");
const notifyRemoveSuccess = () => toast.success("Project successfully removed");

const Project = ({ project, handleDelete, handleUpdate, employeeNames }) => {
  const { id, name, employeesWorking, dueDate, tasksFinished } = project;
  const fullName = employeeNames;

  const [newName, setNewName] = useState();
  const [newEmployeesWorking, setNewEmployeesWorking] = useState([
    ...employeesWorking,
  ]);
  const [newDueDate, setNewDueDate] = useState();
  const [numberOfEmployeesWorking, setNumberOfEmployeesWorking] = useState([]);
  const [counter, setCounter] = useState(2);
  const [isEditing, setIsEditing] = useState(false);
  const handleEdit = () => {
    if (numberOfEmployeesWorking.length === 0) {
      for (let i = 1; i <= employeesWorking.length; i++) {
        numberOfEmployeesWorking.push(i);
        setCounter(i + 1);
      }
    }

    setNewName(name);
    setNewEmployeesWorking(newEmployeesWorking);
    setNewDueDate(dueDate);
    handleUpdate(id, newName, newEmployeesWorking, newDueDate);
    setIsEditing(!isEditing);
  };

  const handleAddEmplyee = () => {
    if (fullName.length > numberOfEmployeesWorking.length) {
      setCounter((prev) => prev + 1);
      setNumberOfEmployeesWorking(() => [...numberOfEmployeesWorking, counter]);
      notifyEmployeeSuccess();
    } else notifyEmployeeErrorAdd();
  };

  const handleRemoveEmplyee = () => {
    if (counter > 2) {
      setCounter((prev) => prev - 1);
      numberOfEmployeesWorking.pop();
      newEmployeesWorking.pop();
      notifyEmployeeError();
    } else notifyEmployeeErrorRemove();
  };

  const handleSelect = (e) => {
    if (numberOfEmployeesWorking.length <= 1) {
      setNewEmployeesWorking([e.target.value]);
    } else {
      setNewEmployeesWorking([...employeesWorking, e.target.value]);
    }
  };

  return (
    <div className="grid grid-cols-[90%,10%] p-4 bg-gray-700 border-b border-solid border-gray-600">
      <div>
        <div className="grid grid-cols-[18%,33.5%,18%,30.5%] items-center">
          {!isEditing ? (
            <>
              <div className="flex items-center text-center justify-center">
                {name}
              </div>
              <div className="grid items-center text-center justify-center">
                {employeesWorking.map((employeeWorking, id) => {
                  return (
                    <div key={id}>
                      <div>{employeeWorking}</div>
                    </div>
                  );
                })}
              </div>
              <div className="flex items-center text-center justify-center">
                {dueDate}
              </div>
              <div className="flex items-center text-center justify-center">
                {tasksFinished}
              </div>
            </>
          ) : (
            <>
              <div className="flex justify-center">
                <input
                  className="bg-gray-800 ml-3 mb-2 w-full"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                {numberOfEmployeesWorking.map((num, id) => {
                  console.log(numberOfEmployeesWorking);
                  for (let i = 0; i < num; i++) {
                    return (
                      <select
                        key={id}
                        onChange={(e) => handleSelect(e)}
                        className="bg-gray-800 ml-3 mb-2 w-fit"
                      >
                        {fullName.map((name, id) => (
                          <option key={id} value={name}>
                            {name}
                          </option>
                        ))}
                      </select>
                    );
                  }
                  return 0;
                })}
              </div>
              <div className="flex justify-center">
                <input
                  className="bg-gray-800 ml-3 mb-2 w-full"
                  value={newDueDate}
                  onChange={(e) => setNewDueDate(e.target.value)}
                />
              </div>
              <div className="flex justify-center">
                <input
                  className="bg-gray-800 ml-3 mb-2 w-2/12"
                  value={tasksFinished}
                  disabled={true}
                />
              </div>
            </>
          )}
        </div>

        {!isEditing ? (
          <></>
        ) : (
          <div className="flex justify-center gap-2 my-1">
            <button
              className="w-1/5 rounded-lg bg-gray-600"
              onClick={handleAddEmplyee}
            >
              Add employee
            </button>
            <button
              className="w-1/4 rounded-lg bg-gray-600"
              onClick={handleRemoveEmplyee}
            >
              Remove employee
            </button>
          </div>
        )}
      </div>

      <div className="flex justify-end gap-3">
        <button onClick={handleEdit}>Edit</button>
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

export { Project };
