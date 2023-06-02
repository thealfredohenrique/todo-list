import logo from "../assets/Logo.svg";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="todo logo" />
    </header>
  );
}

export default Header;
