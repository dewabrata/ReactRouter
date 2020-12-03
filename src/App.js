import './App.css';
import Container from './component/container';
import Containerright from './component/containerright';
import Containeraction from './component/containeraction';
import Footer from './component/footer';
import Header from './component/header';
import Welcome from './component/welcome'
import About from './component/about';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Gallery from './component/gallery';
import Contact from './component/contact';


function App() {
  return (
    <Router>
    <div className="container-fluid">
      <Header/>
      <Welcome/>
      <Route path="/" exact component={Container}/>
      <Route path="/about" component={About}/>
      <Route path="/gallery" component={Gallery}/>
      <Route path="/contact" component={Contact}/>
     
      <Containeraction/>
      <Footer/>
   
     
  </div>
  </Router>
  );
}

export default App;
