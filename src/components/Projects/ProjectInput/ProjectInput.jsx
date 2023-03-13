import { useState } from "react";

const ProjectInput = ({ addProject, employeeNames }) => {
  const fullName = employeeNames;
  const [name, setName] = useState("");
  const [employeesWorking, setEmployeesWorking] = useState([fullName[0]]);
  const [dueDate, setDueDate] = useState("");
  const [numberOfEmployeesWorking, setNumberOfEmployeesWorking] = useState([1]);
  const [counter, setCounter] = useState(2);

  const handleAddProject = () => {
    addProject(name, employeesWorking, dueDate);
    setName("");
    setEmployeesWorking([]);
    setDueDate("");
  };

  const handleAddEmplyee = () => {
    if (fullName.length > numberOfEmployeesWorking.length) {
      setCounter((prev) => prev + 1);
      setNumberOfEmployeesWorking(() => [...numberOfEmployeesWorking, counter]);
    }
  };

  const handleRemoveEmplyee = () => {
    if (counter > 2) {
      setCounter((prev) => prev - 1);
      numberOfEmployeesWorking.pop();
    }
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
            <select key={id}
              onChange={(e) => setEmployeesWorking([...employeesWorking,e.target.value])}
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
      <div className="flex justify-center gap-1">
        <button
          className="w-1/6 mt-2 py-1 text-xl rounded-lg bg-gray-600"
          onClick={handleAddEmplyee}
        >
          Add employee
        </button>
        <button
          className="w-1/5 mt-2 py-1 text-xl rounded-lg bg-gray-600"
          onClick={handleRemoveEmplyee}
        >
          Remove employee
        </button>
        <button
          className="w-1/12 mt-2 py-1 text-xl rounded-lg bg-gray-600"
          onClick={handleAddProject}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export { ProjectInput };
