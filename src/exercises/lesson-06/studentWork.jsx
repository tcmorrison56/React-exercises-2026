import { useState } from 'react';
import useDataFetch from './hooks/useDataFetch';
import UserProfile from './components/UserProfile';
import TaskFilterButton from './components/TaskFilterButton';
import TaskItem from './components/TaskItem';
import filterTasks from './utils/FilterTasks';

export default function StudentWork() {
  const [filter, setFilter] = useState('all');
  const { tasks, loading } = useDataFetch();

  if (loading) {
    return <p>Loading tasks...</p>;
  }

  return (
    <div>
      <UserProfile />

      <div>
        <TaskFilterButton
          filter={'All'}
          setFilter={setFilter}
          onClick={() => filterTasks(filter)}
        />
        <TaskFilterButton
          filter={'Completed'}
          setFilter={setFilter}
          onClick={() => filterTasks(filter)}
        />
        <TaskFilterButton
          filter={'Pending'}
          setFilter={setFilter}
          onClick={() => filterTasks(filter)}
        />
        <p>Current filter: {filter}</p>
      </div>

      <ul>
        {filterTasks(tasks, filter).map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
}
