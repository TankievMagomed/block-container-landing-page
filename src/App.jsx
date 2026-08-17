import $ from "./App.module.css";
import {
  CompletedProjects,
  Main,
  WhyUs,
  SolutionCatalog,
  PhotoGallery,
  Functionality,
  AdditionalServices,
  Production,
  Service,
  Warranty,
  Certificates,
  AboutTheCompany,
  Reviews,
  Contacts,
} from "sections";
import { SideChipMail, SideMenu } from "components";
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
        <Functionality />
        <AdditionalServices />
        <Production />
        <Service />
        <Warranty />
        <Certificates/>
        <AboutTheCompany/>
        <Reviews/>
        <Contacts/>
        <SideMenu/>
        <SideChipMail/>
      </div>
    </div>
  );
}

export default App;
