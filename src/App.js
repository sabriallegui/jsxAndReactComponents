import './App.css';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Mainimage from './Components/Mainimage';
import Navigation from './Components/Navigation';
import Projects from './Components/Projects'
function App() {
  return (
    <div className="App">
      {/* navigation part  */}
      <Navigation />
      {/* main image part  */}
      <Mainimage />
      {/* project part  */}
      <Projects />
      {/* form project  */}
      <Form />
      {/* fotter part  */}
      <Footer />

    </div>
  );
}

export default App;
