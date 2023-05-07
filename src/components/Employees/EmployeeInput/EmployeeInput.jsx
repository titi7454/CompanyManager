import { useState } from "react";
import toast from "react-hot-toast";
const notifySuccess = () => toast.success("Employee successfully added");
const notifyError = () => toast.error("Something is missing");

const EmployeeInput = ({ addEmployee }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [birthday, setBirthday] = useState("");
  const [salary, setSalary] = useState("");

  const handleAddEmployee = () => {
    if (
      fullName !== "" &&
      email !== "" &&
      phone !== "" &&
      birthday !== "" &&
      salary !== ""
    ) {
      addEmployee(fullName, email, phone, birthday, salary);
      setFullName("");
      setEmail("");
      setPhone("");
      setBirthday("");
      setSalary("");
      notifySuccess();
    } else notifyError();
  };

  return (
    <div className="mt-6 relative flex flex-col justify-center w-full">
      <input
        className="focus:shadow-lg font-Inter focus:shadow-blue-800 pl-12 w-full py-4 my-2 bg-gray-700 rounded-xl outline-none transition-all duration-300 ease-in-out"
        type="text"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        placeholder="Full Name"
      />
      <input
        className="focus:shadow-lg font-Inter focus:shadow-blue-800 pl-12 w-full py-4 my-2 bg-gray-700 rounded-xl outline-none transition-all duration-300 ease-in-out"
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        className="focus:shadow-lg font-Inter focus:shadow-blue-800 pl-12 w-full py-4 my-2 bg-gray-700 rounded-xl outline-none transition-all duration-300 ease-in-out"
        type="text"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Phone"
      />
      <input
        className="focus:shadow-lg font-Inter focus:shadow-blue-800 pl-12 w-full py-4 my-2 bg-gray-700 rounded-xl outline-none transition-all duration-300 ease-in-out"
        type="text"
        value={birthday}
        onChange={(e) => setBirthday(e.target.value)}
        placeholder="Birthday"
      />
      <input
        className="focus:shadow-lg font-Inter focus:shadow-blue-800 pl-12 w-full py-4 my-2 bg-gray-700 rounded-xl outline-none transition-all duration-300 ease-in-out"
        type="text"
        value={salary}
        onChange={(e) => setSalary(e.target.value)}
        placeholder="Salary"
      />
      <button
        className="lg:w-1/12 mx-auto mt-2 py-1 text-xl rounded-lg bg-gray-600"
        onClick={handleAddEmployee}
      >
        Submit
      </button>
    </div>
  );
};

export { EmployeeInput };
