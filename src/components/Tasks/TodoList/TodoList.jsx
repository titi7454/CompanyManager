import { Todo } from "../Todo";
import { TodoFilters } from "../TodoFilters";

const TodoList = ({
  todos,
  activeFilter,
  handleSetComplete,
  handleDelete,
  handleClearComplete,
  showAllTodos,
  showActiveTodos,
  showCompletedTodos,
  handleUpdate,
  employeeNames,
}) => {
  return (
    <div className="flex flex-col mt-7 rounded-lg overflow-hidden shadow-2xl">
      <div className="bg-stone-900 hidden lg:grid grid-cols-[5%,16.6%,16.6%,16.6%,16.6%,16.6%,12%]">
        <div></div>
        <div className="flex justify-center items-center">Title</div>
        <div className="flex justify-center items-center">Description</div>
        <div className="flex justify-center items-center">Employee</div>
        <div className="flex justify-center items-center">Due date</div>
        <div className="flex justify-center items-center">Creation date</div>
        <div className="flex justify-center items-center">Options</div>
      </div>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          handleSetComplete={handleSetComplete}
          handleUpdate={handleUpdate}
          handleDelete={handleDelete}
          employeeNames={employeeNames}
        />
      ))}
      <TodoFilters
        activeFilter={activeFilter}
        total={todos.length}
        showAllTodos={showAllTodos}
        showActiveTodos={showActiveTodos}
        showCompletedTodos={showCompletedTodos}
        handleClearComplete={handleClearComplete}
      />
    </div>
  );
};

export { TodoList };
