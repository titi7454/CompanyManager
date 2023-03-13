import { useState } from "react";

const Employee = ({ employee, handleDelete, handleUpdate }) => {
  const { id, fullName, email, phone, birthday, salary, tasksFinished } =
    employee;
  const [newName, setNewName] = useState();
  const [newEmail, setNewEmail] = useState();
  const [newPhone, setNewPhone] = useState();
  const [newBirthday, setNewBirthday] = useState();
  const [newSalary, setNewSalary] = useState();

  const [isEditing, setIsEditing] = useState(false);
  const handleEdit = () => {
    setNewName(fullName);
    setNewEmail(email);
    setNewPhone(phone);
    setNewBirthday(birthday);
    setNewSalary(salary);
    handleUpdate(id, newName, newEmail, newPhone, newBirthday, newSalary);
    setIsEditing(!isEditing);
  };
  return (
    <div className="grid grid-cols-[90%,10%] p-4 bg-gray-700 border-b border-solid border-gray-600">
      <div>
        <div className="grid grid-cols-[19%,20.5%,18.5%,16%,12%,14%] items-center">
          {!isEditing ? (
            <>
              <div className="flex items-center text-center justify-center">
                {fullName}
              </div>{" "}
              <div className="flex items-center text-center justify-center">
                {email}
              </div>{" "}
              <div className="flex items-center text-center justify-center">
                {phone}
              </div>{" "}
              <div className="flex items-center text-center justify-center">
                {birthday}
              </div>{" "}
              <div className="flex items-center text-center justify-center">
                {salary}
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
              <div className="flex justify-center">
                <input
                  className="bg-gray-800 ml-3 mb-2 w-full"
                  value={newEmail}
                  onChange={(e) => setNewEmail(e.target.value)}
                />
              </div>
              <div className="flex justify-center">
                <input
                  className="bg-gray-800 ml-3 mb-2 w-full"
                  value={newPhone}
                  onChange={(e) => setNewPhone(e.target.value)}
                />
              </div>
              <div className="flex justify-center">
                <input
                  className="bg-gray-800 ml-3 mb-2 w-full"
                  value={newBirthday}
                  onChange={(e) => setNewBirthday(e.target.value)}
                />
              </div>
              <div className="flex justify-center">
                <input
                  className="bg-gray-800 ml-3 mb-2 w-full"
                  value={newSalary}
                  onChange={(e) => setNewSalary(e.target.value)}
                />
              </div>
              <div className="flex justify-center">
                <input
                  className="bg-gray-800 ml-3 mb-2 w-full"
                  value={tasksFinished}
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

export { Employee };
