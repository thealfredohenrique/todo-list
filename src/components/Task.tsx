import { Check, Circle, Trash } from "@phosphor-icons/react";
import styles from "./Task.module.css";

function Task() {
  return (
    <article className={styles.checkedTask}>
      <label className={styles.check} htmlFor="check">
        <input id="check" type="checkbox" />
        {/* <Circle className={styles.unchecked} size={20} weight="bold" /> */}
        <Check className={styles.checked} size={20} weight="bold" />
      </label>
      <p className={styles.content}>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.
      </p>
      <button className={styles.delete}>
        <Trash size={20} />
      </button>
    </article>
  );
}

export default Task;
