import { PlusCircle } from "@phosphor-icons/react";
import styles from "./AddTask.module.css";

function AddTask() {
  return (
    <form className={styles.addTask}>
      <input type="text" placeholder="Adicione uma nova tarefa" />
      <button type="submit">
        Criar
        <PlusCircle size={20} weight="bold" />
      </button>
    </form>
  );
}

export default AddTask;
