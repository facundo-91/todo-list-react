import React from 'react';
import './Task.css';

const Task = props => {
	return (
		<div className='task-wrapper'>
			<input
				type='checkbox'
				className='task-checkbox'
				onChange={() => props.completeTask(props.id)}>
			</input>
			<p
				className={props.taskCompleted ? 'task-text task-completed' : 'task-text'}>
				{props.taskText}
			</p>
			<button
				className='task-remove-button'
				onClick={ () => props.removeTask(props.id)}>
				X
			</button>
		</div>
	)
}

export default Task;