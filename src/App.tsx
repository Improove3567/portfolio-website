import './App.scss';
import About from './components/aboutMe/About';
import Contacts from './components/contact/Contacts';
import Header from './components/header/Header';
import Info from './components/info_block/Info';
import Projects from './components/projects/Projects';

function App() {
  return (
    <div>
      <Header />
      <Info />
      <About />
      <Projects />
      <Contacts />
    </div>
  );
}

export default App;
