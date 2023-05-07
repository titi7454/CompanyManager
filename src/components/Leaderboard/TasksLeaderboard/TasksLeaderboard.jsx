const TasksLeaderboard = ({ mostTasksDone }) => {
  const { fullName, email, phone, birthday, salary, tasksFinished } =
    mostTasksDone;

  return (
    <div className="grid grid-rows lg:grid-cols p-4 bg-gray-700 border-b border-solid border-gray-600">
      <div className="grid lg:grid-cols-[16%,24%,19%,17%,11%,13%] items-center gap-2 lg:gap-0">
        <div className="flex flex-col gap-2 items-center text-center justify-center">
          <div className="lg:hidden w-full bg-stone-900">Full Name:</div>
          <div >
            {fullName}
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center text-center justify-center">
          <div className="lg:hidden w-full bg-stone-900">Email:</div>
          <div >
            {email}
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center text-center justify-center">
          <div className="lg:hidden w-full bg-stone-900">Phone:</div>
          <div >
            {phone}
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center text-center justify-center">
          <div className="lg:hidden w-full bg-stone-900">Birthday:</div>
          <div >
            {birthday}
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center text-center justify-center">
          <div className="lg:hidden w-full bg-stone-900">Salary:</div>
          <div >
            {salary}
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center text-center justify-center">
          <div className="lg:hidden w-full bg-stone-900">Tasks Finished:</div>
          <div >
            {tasksFinished}
          </div>
        </div>
      </div>
    </div>
  );
};

export { TasksLeaderboard };
