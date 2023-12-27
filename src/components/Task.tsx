import { Check, Circle, Trash, Warning } from "@phosphor-icons/react";
import { Priority } from "./Tasks";
import styles from "./Task.module.css";

interface TaskProps {
  id: string;
  isDone: boolean;
  content: string;
  priority: Priority;
  onToggleIsDone: (id: string, value: boolean) => void;
  onDelete: (id: string) => void;
  onChangePriority: (id: string, newPriority: Priority) => void;
}

function Task({
  id,
  isDone,
  content,
  priority,
  onToggleIsDone,
  onDelete,
  onChangePriority,
}: TaskProps) {
  function handleToggleIsDone() {
    onToggleIsDone(id, !isDone);
  }

  function handleChangePriority() {
    const priorities = Object.values(Priority);
    const currentPriorityIndex = priorities.findIndex((e) => e === priority);
    const newPriority =
      currentPriorityIndex === priorities.length - 1
        ? priorities[0]
        : priorities[currentPriorityIndex + 1];

    onChangePriority(id, newPriority);
  }

  function handleDelete() {
    onDelete(id);
  }

  return (
    <article
      className={`
        ${styles[priority]}
        ${isDone ? styles.checkedTask : styles.uncheckedTask}
    `}
    >
      <label className={styles.check}>
        <input onChange={handleToggleIsDone} type="checkbox" />
        {isDone ? (
          <Check className={styles.checked} size={20} weight="bold" />
        ) : (
          <Circle className={styles.unchecked} size={20} weight="bold" />
        )}
      </label>
      <p className={styles.content}>{content}</p>
      <button onClick={handleChangePriority} className={styles.priority}>
        <Warning size={20} />
      </button>
      <button onClick={handleDelete} className={styles.delete}>
        <Trash size={20} />
      </button>
    </article>
  );
}

export default Task;
