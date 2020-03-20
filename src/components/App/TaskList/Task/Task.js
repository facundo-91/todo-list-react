import React from 'react';
import './Task.css';

const Task = props => {
	return (
		<div className='task-wrapper'>
			<input
				type='checkbox'
				checked={props.taskCompleted}
				className='task-checkbox'
				onChange={() => props.completeTask(props.id)}>
			</input>
			<p
				className={props.taskCompleted ? 'task-text task-completed' : 'task-text'}>
					{props.taskText}
			</p>
			<button
				className='task-remove-button'
				onClick={() => props.removeTask(props.id)}>
				<span className='material-icons task-remove-icon'>delete</span>
			</button>
		</div>
	)
}

export default Task;