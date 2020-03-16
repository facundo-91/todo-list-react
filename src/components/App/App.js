import React, { useState } from 'react';
import TaskInput from './TaskInput/TaskInput';
import TaskList from './TaskList/TaskList';

const App = () => {
	// States
	const [ tasks, setTasks ] = useState([]);
	
	// Functions
	const addTask = text => {
		// Generate an ID for every task
		const id = (tasks.length) ? tasks[tasks.length - 1].id + 1 : 0;
		// Generate an object for every new task and change the state with it
		const newTasks = [...tasks, { id, text, completed: false }];
		setTasks(newTasks);
	}
	
	const removeTask = index => {
		const newTasks = [...tasks].filter(task => task.id !== index);
		setTasks(newTasks);
	}

  return (
    <div>
			<h1>TO-DO REACT APP</h1>
			<TaskInput addTaskFn={addTask} />
      <TaskList taskListArr={tasks} removeTaskFn={removeTask} />
    </div>
  )
}

export default App;