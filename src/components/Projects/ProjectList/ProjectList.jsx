import { Project } from "../Project";
// import { TodoFilters } from "../TodoFilters";

const ProjectList = ({
  project,
  // activeFilter,
  // handleSetComplete,
  handleDelete,
  // handleClearComplete,
  // showAllTodos,
  // showActiveTodos,
  // showCompletedTodos,
  handleUpdate,
  employeeNames,
}) => {
  return (
    <div className="flex flex-col mt-7 rounded-lg overflow-hidden shadow-2xl">
      <div className="bg-stone-900 hidden lg:grid grid-cols-[20%,24%,21%,22%,13%]">
        <div className="flex justify-center items-center">Project name</div>
        <div className="flex justify-center items-center">Employees</div>
        <div className="flex justify-center items-center">Due date</div>
        <div className="flex justify-center items-center">Total tasks done</div>
        <div className="flex justify-center items-center">Options</div>
      </div>
      {project.map((project) => (
        <Project
          key={project.id}
          project={project}
          employeeNames={employeeNames}
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
export { ProjectList };
