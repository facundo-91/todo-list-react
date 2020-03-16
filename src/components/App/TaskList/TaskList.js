import React from 'react';
import Task from './Task/Task';
import './TaskList.css';

const TaskList = props => {
	if (props.taskListArr.length === 0) {
		return (
			<div className='no-tasks'>
				<p>YOU DON'T HAVE TASKS!</p>
			</div>
		)
	} else {
		return (
			<div className='task-list'>
				{props.taskListArr.map( (taskObject) => (
					<Task
						key={taskObject.id}
						id={taskObject.id}
						taskText={taskObject.text}
						removeTask={props.removeTaskFn}
					/>
				))}
			</div>
		)
	}
}

export default TaskList;