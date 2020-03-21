import React from 'react';
import './TaskFooter.css';

const TaskFooter = props => {
	if (props.taskListArr.length > 0) {
		return (
			<div className='task-footer'>
				<button
					className='remove-completed-button'
					onClick={() => props.removeCompletedFn()}>
						<span className='material-icons'>delete_forever</span>
						 Clear Completed
				</button>
				<button
					className='remove-all-button'
					onClick={() => props.removeAllFn()}>
						<span className='material-icons'>delete_outline</span>
						 Clear All
				</button>
			</div>
		)
	} else return null
}

export default TaskFooter;