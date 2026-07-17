import $ from "./App.module.css";
import {
  CompletedProjects,
  Main,
  WhyUs,
  SolutionCatalog,
  PhotoGallery,
  Functionality,
} from "sections";
import "./styles/fonts.css";
import "./styles/root.css";
import "@mantine/core/styles.layer.css";

function App() {
  return (
    <div className={$.app__wrapper}>
      <div className={$.app__container}>
        <Main />
        <CompletedProjects />
        <WhyUs />
        <SolutionCatalog />
        <PhotoGallery />
        <Functionality/>
      </div>
    </div>
  );
}

export default App;
