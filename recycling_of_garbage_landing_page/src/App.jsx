import $ from './App.module.css';
import { Header } from './components/Header';
import "./styles/fonts.css";


function App() {
  return (
    <div className={$.mainContainer}>
      <Header />
    </div>
  );
}

export default App;
