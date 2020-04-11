import React, { useState, useEffect } from 'react';
import TaskInput from './TaskInput/TaskInput';
import TaskList from './TaskList/TaskList';
import TaskFooter from './TaskFooter/TaskFooter';

const App = () => {
	// States
	const [ tasks, setTasks ] = useState([]);

	// Effects
	useEffect(() => {
		// Get tasks from localstorage if any
		const data = localStorage.getItem('tasks');
		if (data) {
			setTasks(JSON.parse(data))
		}
	}, []);

	useEffect(() => {
		// Save tasks from state to localstorage
		localStorage.setItem('tasks', JSON.stringify(tasks))
	});

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

	const removeCompleted = () => {
		// Use filter to return a new array that have only the tasks
		// with the .completed property False
		const newTasks = [...tasks].filter(task => task.completed === false);
		setTasks(newTasks);
	}

	const removeAll = () => {
		const newTasks = [];
		setTasks(newTasks);
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
			<TaskFooter
				taskListArr={tasks}
				removeCompletedFn={removeCompleted}
				removeAllFn={removeAll}
			/>
    </div>
  )
}

export default App;