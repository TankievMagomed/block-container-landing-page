import $ from './App.module.css';
import { Main } from 'sections';
import "./styles/fonts.css";
import "@mantine/core/styles.layer.css";

function App() {
  return (
    <div className={$.app__wrapper}>
      <div className={$.app__container}>
        <Main />
      </div>
    </div>
  );
}

export default App;
