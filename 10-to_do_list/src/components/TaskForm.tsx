// Lógica do To Do List
import { useState, ChangeEvent, FormEvent, useEffect } from "react";

// estilo module.css
import styles from './TaskForm.module.css';

// interface
import { ITask } from "../interfaces/ITask";

interface Props {
	btnText: string;
	taskList: ITask[];
	setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>
	task?: ITask | null;
	handleUpdate?(id: number, title: string, difficulty: number): void
}

const TaskForm = ({btnText, taskList, setTaskList, task, handleUpdate}: Props) => {
	const [id, setId] = useState<number>(0);
	const [title, setTitle] = useState<string>("");
	const [difficulty, setDifficulty] = useState<number>(0);

	useEffect(() => {
		if (task) {
			setId(task.id);
			setTitle(task.title);
			setDifficulty(task.difficulty);
		}
	}, [task]);

	// adiciona a tarefa na lista de tarefas
	const addTaskHander = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (handleUpdate) {
			handleUpdate(id, title, difficulty);

		} else {
			// cria um id para a tarefa
			const id = Math.floor(Math.random()*100);

			// cria a tarefa completa
			const newTask: ITask = {id, title, difficulty}

			// setar a tarefa na lista
			setTaskList!([...taskList, newTask]);

			// zerar os inputs
			setTitle("");
			setDifficulty(0);
		}	
	}

	// pega caracteres dos inputs
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.name === "title") {
			setTitle(e.target.value);
		} else {
			setDifficulty(parseInt(e.target.value));
		}
		
	}

	return (
		<form onSubmit={addTaskHander} className={styles.form}>
			<div className={styles.input_container}>
				<label htmlFor="title">Título:</label>
				<input 
					type="text" 
					name="title" 
					placeholder="Titulo da tarefa" 
					onChange={handleChange} 
					value={title}/>
			</div>

			<div className={styles.input_container}>
				<label htmlFor="difficulty">Dificuldade:</label>
				<input 
					type="text" 
					name="dificulty" 
					placeholder="Dificuldade da tarefa" 
					onChange={handleChange} 
					value={difficulty}/>
			</div>

			<input type="submit" value={btnText} />
		</form>
	)
}

export default TaskForm;