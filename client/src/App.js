import './App.css';
import Layout from './components/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './screens/Home';
import { Route } from 'react-router-dom'

function App() {
  return (
    <Layout>

      <Route path='/'>
        <Home />
      </Route>
    </Layout>
  );
}

export default App;
