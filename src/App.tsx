import Header from "./components/Header";
import AddTask from "./components/AddTask";
import styles from "./App.module.css";
import "./global.css";

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <AddTask />
      </div>
    </>
  );
}

export default App;
