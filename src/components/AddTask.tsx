import { ChangeEvent, FormEvent, useState } from "react";
import { PlusCircle } from "@phosphor-icons/react";
import styles from "./AddTask.module.css";

interface AddTaskProps {
  onAdd: (content: string) => void;
}

function AddTask({ onAdd }: AddTaskProps) {
  const [content, setContent] = useState("");

  function handleAddTask(event: FormEvent) {
    event.preventDefault();
    onAdd(content);
    setContent("");
  }

  function handleContentChange(event: ChangeEvent<HTMLInputElement>) {
    setContent(event.target.value);
  }

  return (
    <form onSubmit={handleAddTask} className={styles.addTask}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={content}
        onChange={handleContentChange}
        required
      />
      <button type="submit" disabled={content.trim().length === 0}>
        Criar
        <PlusCircle size={20} weight="bold" />
      </button>
    </form>
  );
}

export default AddTask;
