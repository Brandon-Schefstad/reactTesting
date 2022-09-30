import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import './index.css';
function App() {
	const [tasks, setTasks] = useState([
		{
			id: 1,
			text: 'hey',
			other: 'no-show',
			day: 'monday',
			reminder: true,
		},
		{
			text: 'Test1',
			day: 'Wednesday',
			reminder: false,
			id: 3,
		},
		{
			text: 'Task6',
			day: 'Thursday',
			reminder: true,
			id: 4,
		},
	]);

	const deleteTask = (id) => {
		setTasks(tasks.filter((task) => task.id !== id));
	};

	const toggleReminder = (id) => {
		setTasks(
			tasks.map((task) =>
				task.id === id ? { ...task, reminder: !task.reminder } : task
			)
		);
	};
	//
	return (
		<div className="container">
			<Header title={'Task Tracker!'} />
			<AddTask />
			{tasks.length > 0 ? (
				<Tasks
					tasks={tasks}
					onDelete={deleteTask}
					onToggle={toggleReminder}
				/>
			) : (
				<span>None left!</span>
			)}
		</div>
	);
}

export default App;
