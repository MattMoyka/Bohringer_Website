import './App.css';
import Layout from './components/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './screens/Home';
import AboutUs from './screens/AboutUs'
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
    </Layout>
  );
}

export default App;
