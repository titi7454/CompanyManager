const TasksLeaderboard = ({ mostTasksDone }) => {
  const { fullName, email, phone, birthday, salary, tasksFinished } =
    mostTasksDone;

  return (
    <div className="grid grid-cols-[100%] p-4 bg-gray-700 border-b border-solid border-gray-600">
        <div className="grid grid-cols-[16%,24%,19%,17%,11%,13%] items-center">
          <div className="flex items-center text-center justify-center">
            {fullName}
          </div>
          <div className="flex items-center text-center justify-center">
            {email}
          </div>
          <div className="flex items-center text-center justify-center">
            {phone}
          </div>
          <div className="flex items-center text-center justify-center">
            {birthday}
          </div>
          <div className="flex items-center text-center justify-center">
            {salary}
          </div>
          <div className="flex items-center text-center justify-center">
            {tasksFinished}
          </div>
        </div>
    </div>
  );
};

export { TasksLeaderboard };
