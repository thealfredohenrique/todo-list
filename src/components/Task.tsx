import { Check, Circle, Trash } from "@phosphor-icons/react";
import styles from "./Task.module.css";

interface TaskProps {
  id: string;
  isDone: boolean;
  content: string;
  onToggleIsDone: (id: string, value: boolean) => void;
  onDelete: (id: string) => void;
}

function Task({ id, isDone, content, onToggleIsDone, onDelete }: TaskProps) {
  function handleToggleIsDone() {
    onToggleIsDone(id, !isDone);
  }

  function handleDelete() {
    onDelete(id);
  }

  return (
    <article className={isDone ? styles.checkedTask : styles.uncheckedTask}>
      <label className={styles.check}>
        <input onChange={handleToggleIsDone} type="checkbox" />
        {isDone ? (
          <Check className={styles.checked} size={20} weight="bold" />
        ) : (
          <Circle className={styles.unchecked} size={20} weight="bold" />
        )}
      </label>
      <p className={styles.content}>{content}</p>
      <button onClick={handleDelete} className={styles.delete}>
        <Trash size={20} />
      </button>
    </article>
  );
}

export default Task;
