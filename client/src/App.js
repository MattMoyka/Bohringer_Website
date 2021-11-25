import './App.css';
import Layout from './components/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './screens/Home';
import AboutUs from './screens/AboutUs'
import Impactors from './screens/Impactors';
import RGFFeeders from './screens/RGFFeeders';
import { Route } from 'react-router-dom'

function App() {
  return (
    <Layout>

      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/about-us'>
        <AboutUs />
      </Route>
      <Route path='/impactors'>
        <Impactors />
      </Route>
      <Route path='/rgf-feeders'>
        <RGFFeeders />
      </Route>
    </Layout>
  );
}

export default App;
