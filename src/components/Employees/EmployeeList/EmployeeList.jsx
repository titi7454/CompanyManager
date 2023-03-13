import { Employee } from "../Employee";
// import { TodoFilters } from "../TodoFilters";

const EmployeeList = ({
  employee,
  // activeFilter,
  // handleSetComplete,
  handleDelete,
  // handleClearComplete,
  // showAllTodos,
  // showActiveTodos,
  // showCompletedTodos,
  handleUpdate,
}) => {
  return (
    <div className="flex flex-col mt-7 rounded-lg overflow-hidden shadow-2xl">
      <div className="bg-stone-900 grid grid-cols-[17.6%,19.5%,14.6%,14.6%,10%,12.4%,11.3%]">
        <div className="flex justify-center items-center">Full name</div>
        <div className="flex justify-center items-center">E-mail</div>
        <div className="flex justify-center items-center">Phone</div>
        <div className="flex justify-center items-center">Birthday</div>
        <div className="flex justify-center items-center">Salary</div>
        <div className="flex justify-center items-center">Tasks done</div>
        <div className="flex justify-center items-center">Options</div>
      </div>
      {employee.map((employee) => (
        <Employee
          key={employee.id}
          employee={employee}
          handleUpdate={handleUpdate}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
};

/* 
  handleSetComplete={handleSetComplete}
  <TodoFilters
  activeFilter={activeFilter}
  total={todos.length}
  showAllTodos={showAllTodos}
  showActiveTodos={showActiveTodos}
  showCompletedTodos={showCompletedTodos}
  handleClearComplete={handleClearComplete}
/> */
export { EmployeeList };
