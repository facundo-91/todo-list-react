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
		// Generate an object for every new task
		const newTasks = [...tasks, { id, text, completed: false }];
		// Change the state with the new array
		setTasks(newTasks);
	}

	const removeTask = index => {
		// Use filter to return a new array without the task selected to delete
		const newTasks = [...tasks].filter(task => task.id !== index);
		setTasks(newTasks);
	}

	const completeTask = index => {
		// Map through the array
		const newTasks = [...tasks].map(task => {
			// When match with the index of component
			if (task.id === index) {
				// Interchange the boolean state
				task.completed = !(task.completed)
			}
			return task
		})
		setTasks(newTasks)
	}

  return (
    <div>
			<h1>TO-DO REACT APP</h1>
			<TaskInput addTaskFn={addTask} />
      <TaskList
				taskListArr={tasks}
				removeTaskFn={removeTask}
				completeTaskFn={completeTask}
			/>
    </div>
  )
}

export default App;