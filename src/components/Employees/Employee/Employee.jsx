import { useState } from "react";
import toast from "react-hot-toast";
const notifyRemoveSuccess = () =>
  toast.success("Employee successfully removed");

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
    <div className="grid grid-rows-[90%,10%] lg:grid-cols-[90%,10%] p-4 bg-gray-700 border-b border-solid border-gray-600">
      <div>
        <div className="grid lg:grid-cols-[19%,20.5%,18.5%,16%,12%,14%] items-center gap-2 lg:gap-0">
          {!isEditing ? (
            <>
              <div className="flex flex-col gap-2 items-center text-center justify-center">
                <div className="lg:hidden w-full bg-stone-900">Full Name:</div>
                <div>{fullName}</div>
              </div>
              <div className="flex flex-col gap-2 items-center text-center justify-center">
                <div className="lg:hidden w-full bg-stone-900">Email:</div>
                <div>{email}</div>
              </div>
              <div className="flex flex-col gap-2 items-center text-center justify-center">
                <div className="lg:hidden w-full bg-stone-900">Phone:</div>
                <div>{phone}</div>
              </div>
              <div className="flex flex-col gap-2 items-center text-center justify-center">
                <div className="lg:hidden w-full bg-stone-900">Birthday:</div>
                <div>{birthday}</div>
              </div>
              <div className="flex flex-col gap-2 items-center text-center justify-center">
                <div className="lg:hidden w-full bg-stone-900">Salary:</div>
                <div>{salary}</div>
              </div>
              <div className="flex flex-col gap-2 items-center text-center justify-center">
                <div className="lg:hidden w-full bg-stone-900">
                  Tasks Finished:
                </div>
                <div>{tasksFinished}</div>
              </div>
            </>
          ) : (
            <>
              <div className="flex flex-col gap-2 items-center text-center justify-center">
                <div className="lg:hidden w-full bg-stone-900">
                  Full Name:
                </div>
                <input
                  className="bg-gray-800 ml-3 mb-2 lg:w-full"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-2 items-center text-center justify-center">
                <div className="lg:hidden w-full bg-stone-900">
                  Email:
                </div>
                <input
                  className="bg-gray-800 ml-3 mb-2 lg:w-full"
                  value={newEmail}
                  onChange={(e) => setNewEmail(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-2 items-center text-center justify-center">
                <div className="lg:hidden w-full bg-stone-900">
                  Phone:
                </div>
                <input
                  className="bg-gray-800 ml-3 mb-2 lg:w-full"
                  value={newPhone}
                  onChange={(e) => setNewPhone(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-2 items-center text-center justify-center">
                <div className="lg:hidden w-full bg-stone-900">
                  Birthday:
                </div>
                <input
                  className="bg-gray-800 ml-3 mb-2 lg:w-full"
                  value={newBirthday}
                  onChange={(e) => setNewBirthday(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-2 items-center text-center justify-center">
                <div className="lg:hidden w-full bg-stone-900">
                  Salary:
                </div>
                <input
                  className="bg-gray-800 ml-3 mb-2 lg:w-full"
                  value={newSalary}
                  onChange={(e) => setNewSalary(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-2 items-center text-center justify-center">
                <div className="lg:hidden w-full bg-stone-900">
                  Tasks finished:
                </div>
                <input
                  className="bg-gray-800 ml-3 mb-2 lg:w-full"
                  value={tasksFinished}
                  disabled={true}
                />
              </div>
            </>
          )}
        </div>
      </div>
      <div className="flex justify-center lg:justify-end gap-3 mt-2 lg:mt-0">
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

export { Employee };
