import { useCallback, useEffect, useState } from "react";

import {
  TitleTask,
  TodoInput,
  TodoList,
  TitleEmployee,
  EmployeeInput,
  EmployeeList,
  TitleLeaderboard,
  TasksLeaderboardList,
  TitleProject,
  ProjectInput,
  ProjectList,
} from "./components";

import "./App.css";

function App() {
  const date = new Date();
  const checkDate = new Date();
  // Create objects
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Fix submit button",
      description: "The submit button doesn't do anything after clicking but it should create a new task",
      assignee: "Maria Galeva",
      dueDate: "2023-03-27",
      creationDate: date,
      completed: false,
    },
    {
      id: 2,
      title: "Change color of submit button",
      description: "Make the color of the submit button match the UI design",
      assignee: "Maria Galeva",
      dueDate: "2024-01-27",
      creationDate: date,
      completed: false,
    },
    {
      id: 3,
      title: "Attend the next meeting",
      description: "The date is 2023-03-18",
      assignee: "Maria Galeva",
      dueDate: "2024-01-27",
      creationDate: date,
      completed: false,
    },
    {
      id: 4,
      title: "Learn data structures",
      description: "See what data structures are and how to use them",
      assignee: "Ivan Georgiev",
      dueDate: "2024-01-27",
      creationDate: date,
      completed: false,
    },
  ]);

  const [employees, setEmployees] = useState([
    {
      id: 1,
      fullName: "Maria Galeva",
      email: "Margal@gmail.com",
      phone: "+359897652419",
      birthday: "1992-01-27",
      salary: "3000",
      tasksFinished: 0,
    },
    {
      id: 2,
      fullName: "Ivan Georgiev",
      email: "Ivgeo@gmail.com",
      phone: "+359887256189",
      birthday: "2002-03-17",
      salary: "2600",
      tasksFinished: 0,
    },
  ]);
  // Set the names of the employees for easier access
  const [employeeNames, setEmployeeNames] = useState([
    "Maria Galeva",
    "Ivan Georgiev",
  ]);

  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "Yoytube",
      employeesWorking: ["Maria Galeva"],
      dueDate: "2024-01-01",
      tasksFinished: 0,
    },
    {
      id: 2,
      name: "Facemagazine",
      employeesWorking: ["Maria Galeva", "Ivan Georgiev"],
      dueDate: "2023-10-06",
      tasksFinished: 0,
    },
  ]);

  const [activeFilter, setActiveFilter] = useState("all");

  const [filteredTodos, setFilteredTodos] = useState(todos);

  //Create new objects
  const addTodo = (title, description, assignee, dueDate) => {
    const lastId = todos.length > 0 ? todos[todos.length - 1].id : 1;

    const currDate = new Date();

    const newTodo = {
      id: lastId + 1,
      title,
      description,
      assignee,
      dueDate,
      creationDate: currDate,
      completed: false,
    };

    const todoList = [...todos];
    todoList.push(newTodo);

    setTodos(todoList);
  };

  const addEmployee = (fullName, email, phone, birthday, salary) => {
    const lastId =
      employees.length > 0 ? employees[employees.length - 1].id : 1;

    const newEmployee = {
      id: lastId + 1,
      fullName,
      email,
      phone,
      birthday,
      salary,
      tasksFinished: 0,
    };

    const employeeNamesList = [...employeeNames];
    employeeNamesList.push(fullName);

    const employeeList = [...employees];
    employeeList.push(newEmployee);

    setEmployees(employeeList);
    setEmployeeNames(employeeNamesList);
  };

  const addProject = (name, employeesWorking, dueDate) => {
    const lastId = projects.length > 0 ? projects[projects.length - 1].id : 1;

    let totalTasks = 0;

    for (let i = 0; i < employees.length; i++) {
      for (let j = 0; j < employeesWorking.length; j++) {
        if (employeesWorking[j] === employees[i].fullName) {
          totalTasks += employees[i].tasksFinished;
        }
      }
    }

    const newProject = {
      id: lastId + 1,
      name,
      employeesWorking,
      dueDate,
      tasksFinished: totalTasks,
    };

    const projectList = [...projects];
    projectList.push(newProject);

    setProjects(projectList);
  };

  const handleSetComplete = (id, completed) => {
    // Add a point to finished tasks if it was 
    // finished 30 or less days than when it was created
    for (let i = 0; i < todos.length; i++) {
      for (let j = 0; j < employees.length; j++) {
        if (
          id === todos[i].id &&
          !completed &&
          todos[i].assignee === employees[j].fullName &&
          todos[i].creationDate >= checkDate.setDate(checkDate.getDate() - 30)
        ) {
          employees[j].tasksFinished += 1;
          for (let y = 0; y < projects.length; y++) {
            for (let z = 0; z < projects[y].employeesWorking.length; z++) {
              if (projects[y].employeesWorking[z] === employees[j].fullName) {
                projects[y].tasksFinished += 1;
              }
            }
          }
        } else if (
          id === todos[i].id &&
          completed &&
          todos[i].assignee === employees[j].fullName
        ) {
          employees[j].tasksFinished -= 1;
          for (let k = 0; k < projects.length; k++) {
            for (let l = 0; l < projects[k].employeesWorking.length; l++) {
              if (projects[k].employeesWorking[l] === employees[j].fullName) {
                projects[k].tasksFinished -= 1;
              }
            }
          }
        }
      }
    }

    const updatedList = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });

    setTodos(updatedList);
    updateTasksDone();
  };
  // Update and delete objects
  const handleClearComplete = () => {
    const updatedList = todos.filter((todo) => !todo.completed);
    setTodos(updatedList);
  };

  const handleDelete = (id) => {
    const updatedList = todos.filter((todo) => todo.id !== id);
    setTodos(updatedList);
  };

  const handleDeleteEmployee = (id) => {
    const updatedList = employees.filter((employee) => employee.id !== id);
    setEmployees(updatedList);
  };

  const handleDeleteProject = (id) => {
    const updatedList = projects.filter((project) => project.id !== id);
    setProjects(updatedList);
  };

  const handleUpdate = (
    id,
    newTask,
    newDescription,
    newAssignee,
    newDueDate
  ) => {
    const updateTask = todos.findIndex((task) => task.id === id);
    todos[updateTask].title = newTask;
    todos[updateTask].description = newDescription;
    todos[updateTask].assignee = newAssignee;
    todos[updateTask].dueDate = newDueDate;
  };

  const handleUpdateEmployee = (
    id,
    newName,
    newEmail,
    newPhone,
    newBirthday,
    newSalary
  ) => {
    const updateEmployee = employees.findIndex(
      (employee) => employee.id === id
    );
    employees[updateEmployee].fullName = newName;
    employees[updateEmployee].email = newEmail;
    employees[updateEmployee].phone = newPhone;
    employees[updateEmployee].birthday = newBirthday;
    employees[updateEmployee].salary = newSalary;

    const newEmployeeName = [...employeeNames];
    newEmployeeName[updateEmployee] = newName;
    setEmployeeNames(newEmployeeName);
  };

  const handleUpdateProject = (
    id,
    newName,
    newEmployeesWorking,
    newDueDate
  ) => {
    const updateProject = projects.findIndex((project) => project.id === id);
    projects[updateProject].name = newName;
    projects[updateProject].employeesWorking = newEmployeesWorking;
    projects[updateProject].dueDate = newDueDate;
  };

  const showAllTodos = () => {
    setActiveFilter("all");
  };

  const showActiveTodos = () => {
    setActiveFilter("active");
  };

  const showCompletedTodos = () => {
    setActiveFilter("completed");
  };
  //Creating the leaderboard
  const [mostTasksDone, setMostTasksDone] = useState(employees);
  const updateTasksDone = useCallback(() => {
    const updatedTasks = employees
      .slice()
      .sort((b, a) => a.tasksFinished - b.tasksFinished);
    setMostTasksDone(updatedTasks);
  }, [employees]);

  useEffect(() => {
    if (activeFilter === "all") {
      setFilteredTodos(todos);
    } else if (activeFilter === "active") {
      const activeTodos = todos.filter((todo) => todo.completed === false);
      setFilteredTodos(activeTodos);
    } else if (activeFilter === "completed") {
      const completedTodos = todos.filter((todo) => todo.completed === true);
      setFilteredTodos(completedTodos);
    }
    updateTasksDone();
  }, [activeFilter, todos, employees, updateTasksDone]);

  return (
    <div className="bg-gray-900 min-h-screen font-inter h-full text-gray-100 flex items-center justify-center py-20 px-5">
      <div className="container flex flex-col max-w-4xl">
        <TitleTask />
        <TodoInput addTodo={addTodo} employeeNames={employeeNames} />
        <TodoList
          activeFilter={activeFilter}
          todos={filteredTodos}
          employeeNames={employeeNames}
          showAllTodos={showAllTodos}
          showActiveTodos={showActiveTodos}
          showCompletedTodos={showCompletedTodos}
          handleSetComplete={handleSetComplete}
          handleUpdate={handleUpdate}
          handleDelete={handleDelete}
          handleClearComplete={handleClearComplete}
        />

        <TitleEmployee />
        <EmployeeInput addEmployee={addEmployee} />
        <EmployeeList
          employee={employees}
          handleUpdate={handleUpdateEmployee}
          handleDelete={handleDeleteEmployee}
        />

        <TitleProject />
        <ProjectInput addProject={addProject} employeeNames={employeeNames} />
        <ProjectList
          employeeNames={employeeNames}
          project={projects}
          handleUpdate={handleUpdateProject}
          handleDelete={handleDeleteProject}
        />

        <TitleLeaderboard />
        <TasksLeaderboardList mostTasksDone={mostTasksDone}/>
      </div>
    </div>
  );
}

export default App;
