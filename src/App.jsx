import Header from './Components/header';
import Footer from './Components/footer';
import Home from './Components/home';
import About from './Components/about';
import Service from './Components/service';
import Screenshots from './Components/screenshots';
import Pricing from './Components/pricing';
import Team from './Components/team';
import Contact from './Components/contact';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/home" component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/service" component={Service}></Route>
          <Route path="/screenshots" component={Screenshots}></Route>
          <Route path="/pricing" component={Pricing}></Route>
          <Route path="/team" component={Team}></Route>
          <Route path="/contact" component={Contact}></Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
