import { useEffect, useState } from "react";
import Task from "./Task";
import AddTask from "./AddTask";
import clipboard from "../assets/clipboard.png";
import styles from "./Tasks.module.css";

interface Task {
  id: string;
  isDone: boolean;
  content: string;
}

function Tasks() {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const storageTasks = localStorage.getItem("@todo-list:tasks-1.0.0")

    if (storageTasks) return JSON.parse(storageTasks)

    return []
  });

  useEffect(() => {
    const tasksAsStringify = JSON.stringify(tasks)
    localStorage.setItem("@todo-list:tasks-1.0.0", tasksAsStringify)
  }, [tasks])

  function addTask(content: string) {
    const newTask: Task = {
      id: self.crypto.randomUUID(),
      isDone: false,
      content,
    };
    setTasks((currentValue) => [...currentValue, newTask]);
  }

  function toggleIsDoneTask(id: string, value: boolean) {
    setTasks((currentValue) =>
      currentValue.map((task) => ({
        ...task,
        isDone: task.id === id ? value : task.isDone,
      }))
    );
  }

  function deleteTask(id: string) {
    const tasksWithoutDeleteOne = tasks.filter((task) => task.id !== id);
    setTasks(tasksWithoutDeleteOne);
  }

  function getCreatedTasksQuantity() {
    return tasks.length;
  }

  function getCompletedTasksQuantity() {
    return tasks.filter((task) => task.isDone).length;
  }

  return (
    <main>
      <AddTask onAdd={addTask} />

      <header className={styles.info}>
        <p className={styles.created}>
          Tarefas criadas
          <span>{getCreatedTasksQuantity()}</span>
        </p>

        <p className={styles.done}>
          Concluídas
          <span>
            {getCompletedTasksQuantity()} de {getCreatedTasksQuantity()}
          </span>
        </p>
      </header>

      {tasks.length ? (
        <section className={styles.list}>
          {tasks.map((task) => (
            <Task
              key={task.id}
              {...task}
              onToggleIsDone={toggleIsDoneTask}
              onDelete={deleteTask}
            />
          ))}
        </section>
      ) : (
        <section className={styles.empty}>
          <img src={clipboard} alt="Clipboard" />
          <p>
            <strong>Você ainda não tem tarefas cadastradas</strong>
            Crie tarefas e organize seus itens a fazer
          </p>
        </section>
      )}
    </main>
  );
}

export default Tasks;
