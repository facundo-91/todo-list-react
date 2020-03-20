import React, { useState } from 'react';
import './TaskInput.css';

const TaskInput = props => {
	// States
	const [ value, setValue ] = useState('');
	
	// Functions
	const handleSubmit = e => {
		// Don't refresh page when submit
		e.preventDefault();
		// Don't run if input field is empty
		if (!value) return
		// Pass the input field text to the Fn
		props.addTaskFn(value);
		// Empty input field after add
		setValue('');
	}

	return (
		<form onSubmit={handleSubmit} className='form'>
			<input
				className='form-input-field'
				type='text'
				placeholder='Enter a task...'
				value={value}
				onChange={e => setValue(e.target.value)}>
			</input>
			<button
				className='form-input-button'
				onClick={handleSubmit}>
					<span className='material-icons'>add_circle</span>
				Add
			</button>
		</form>
	)
}

export default TaskInput;