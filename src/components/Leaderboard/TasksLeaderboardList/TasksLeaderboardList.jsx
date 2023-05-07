import { TasksLeaderboard } from "../TasksLeaderboard";

const TasksLeaderboardList = ({
  mostTasksDone
}) => {
  return (
    <div className="flex flex-col mt-7 rounded-lg overflow-hidden shadow-2xl">
      <div className="bg-stone-900 hidden lg:grid grid-cols-[18.6%,20%,21.5%,14%,13%,10%]">
        <div className="flex justify-center items-center">Full name</div>
        <div className="flex justify-center items-center">E-mail</div>
        <div className="flex justify-center items-center">Phone</div>
        <div className="flex justify-center items-center">Birthday</div>
        <div className="flex justify-center items-center">Salary</div>
        <div className="flex justify-center items-center">Tasks done</div>
      </div>
      {mostTasksDone.map((tasks, id) => {
        if (id < 5) {
          return <TasksLeaderboard key={id} mostTasksDone={tasks} />;
        } else return 0;
      })}
    </div>
  );
};

export { TasksLeaderboardList };
