import { useState } from "react";
// components
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import TaskForm from "./components/TaskForm";
import { TaskList } from "./components/TaskList";
import Modal from "./components/Modal";

// styles
import styles from "./App.module.css"

// interface
import { ITask } from "./interfaces/ITask";

function App() {

	// lista de tarefas
	const [taskList, setTaskList] = useState<ITask[]>([])
	const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null);

	const deleteTask = (id: number) => {
		setTaskList(
			taskList.filter((task) => {
				return task.id !== id;
		})
		)
	}

	const hiderOrShowModal = (display: boolean)  => {
		const modal = document.querySelector("#modal");
		if (modal) {
			if (display) {
					modal.classList.remove("hide");
			} else {
					modal.classList.add("hide");
			}
		}
	}

	const editTask = (task: ITask): void => {
		hiderOrShowModal(true);
		setTaskToUpdate(task);
	}

	const updateTask = (id: number, title: string, difficulty: number) => {
		const updateTask: ITask = {id, title, difficulty}

		const updatedItems = taskList.map((task) => {
			return task.id === updateTask.id ? updateTask : task
		})

		setTaskList(updatedItems);

		hiderOrShowModal(false);
	}

  return (
    <>
      <div className={styles.container}>
				<Modal 
					children={
						<TaskForm 
							btnText="Editar Tarefa" 
							taskList={taskList} 
							task={taskToUpdate} 
							handleUpdate={updateTask}
						/>
					}
				/>
				<Header />
				<div className={styles.main}>
					<div>
						<h2>O que você vai fazer?</h2>
						<TaskForm 
							btnText="Criar Tarefa"
							taskList={taskList} 
							setTaskList={setTaskList}/>
					</div>

					<div>
						<h2>Suas tarefas:</h2>
						<TaskList 
							taskList={taskList} 
							handleDelete={(deleteTask)} 
							handleEdit={editTask}/>
					</div>
				</div>
				<Footer />
			</div>        
    </>
  )
}

export default App