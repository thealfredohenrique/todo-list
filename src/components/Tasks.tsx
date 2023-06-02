import clipboard from "../assets/clipboard.png";
import styles from "./Tasks.module.css";

function Tasks() {
  return (
    <main>
      <header className={styles.info}>
        <p className={styles.created}>
          Tarefas criadas
          <span>0</span>
        </p>

        <p className={styles.done}>
          Concluídas
          <span>0</span>
        </p>
      </header>

      <section className={styles.empty}>
        <img src={clipboard} alt="Clipboard" />
        <p>
          <strong>Você ainda não tem tarefas cadastradas</strong>
          Crie tarefas e organize seus itens a fazer
        </p>
      </section>
    </main>
  );
}

export default Tasks;
