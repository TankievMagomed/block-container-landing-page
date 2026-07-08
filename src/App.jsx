import $ from './App.module.css';
import { CompletedProjects, Main, WhyUs } from 'sections';
import "./styles/fonts.css";
import "./styles/root.css";
import "@mantine/core/styles.layer.css";
import { SolutionCatalog } from 'sections/SolutionCatalog';

function App() {
  return (
    <div className={$.app__wrapper}>
      <div className={$.app__container}>
        <Main />
        <CompletedProjects />
        <WhyUs/>
        <SolutionCatalog/>
      </div>
    </div>
  );
}

export default App;
