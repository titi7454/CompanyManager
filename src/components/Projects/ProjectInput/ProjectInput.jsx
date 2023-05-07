import { useState } from "react";
import toast from "react-hot-toast";
const notifySuccess = () => toast.success("Project successfully created");
const notifyError = () => toast.error("Something is missing");
const notifyEmployeeSuccess = () =>
  toast.success("Employee successfully added to the project");
const notifyEmployeeError = () =>
  toast.success("Employee successfully removed from the project");
const notifyEmployeeErrorAdd = () =>
  toast.error("There aren't any more employess to add");
const notifyEmployeeErrorRemove = () =>
  toast.error("You can't remove the last employee");

const ProjectInput = ({ addProject, employeeNames }) => {
  const fullName = employeeNames;
  const [name, setName] = useState("");
  const [employeesWorking, setEmployeesWorking] = useState([fullName[0]]);
  const [dueDate, setDueDate] = useState("");
  const [numberOfEmployeesWorking, setNumberOfEmployeesWorking] = useState([1]);
  const [counter, setCounter] = useState(2);

  const handleAddProject = () => {
    if (name !== "" && employeesWorking !== "" && dueDate !== "") {
      addProject(name, employeesWorking, dueDate);
      setName("");
      setEmployeesWorking([]);
      setDueDate("");
      notifySuccess();
    } else notifyError();
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
      notifyEmployeeError();
    } else notifyEmployeeErrorRemove();
  };

  return (
    <div className="mt-6 relative flex flex-col justify-center w-full">
      <input
        className="focus:shadow-lg font-Inter focus:shadow-blue-800 pl-12 w-full py-4 my-2 bg-gray-700 rounded-xl outline-none transition-all duration-300 ease-in-out"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      {numberOfEmployeesWorking.map((num, id) => {
        for (let i = 0; i < num; i++) {
          return (
            <select
              key={id}
              onChange={(e) =>
                setEmployeesWorking([...employeesWorking, e.target.value])
              }
              className="focus:shadow-lg font-Inter focus:shadow-blue-800 pl-12 w-full py-4 my-2 bg-gray-700 rounded-xl outline-none transition-all duration-300 ease-in-out"
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
      <input
        className="focus:shadow-lg font-Inter focus:shadow-blue-800 pl-12 w-full py-4 my-2 bg-gray-700 rounded-xl outline-none transition-all duration-300 ease-in-out"
        type="text"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        placeholder="Due date"
      />
      <div className="flex flex-col lg:flex-row justify-center items-center gap-1">
        <button
          className="w-2/3 lg:w-1/6 mt-2 py-1 text-xl rounded-lg bg-gray-600"
          onClick={handleAddEmplyee}
        >
          Add employee
        </button>
        <button
          className="w-2/3 lg:w-1/5 mt-2 py-1 text-xl rounded-lg bg-gray-600"
          onClick={handleRemoveEmplyee}
        >
          Remove employee
        </button>
        <button
          className="w-2/3 lg:w-[13%] mt-2 py-1 text-xl rounded-lg bg-gray-600"
          onClick={handleAddProject}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export { ProjectInput };
