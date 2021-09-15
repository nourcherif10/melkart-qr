import './App.css';
import './component/form/Form';
import './component/form/landingPage';
import './component/form/thirdPage';
import './component/Devco';
import './component/Marketing';
import './component/Admin';

import Admin from './component/Admin';
import Marketing from './component/Marketing';
import Devco from './component/Devco';
import Form from './component/form/Form';
import landingPage from './component/form/landingPage';
import thirdPage from './component/form/thirdPage';
import { BrowserRouter , Switch , Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <div className="d-flex justify-content-center" >
      <BrowserRouter>
        <Switch>
          <Route exact path="/form" component={Form}/>
          <Route exact path="/" component={landingPage}/>
          <Route exact path="/thanks" component={thirdPage}/>
          <Route exact path="/Marketing" component={Marketing}/>
          <Route exact path="/Devco" component={Devco}/>
          <Route exact path="/nourmessi" component={Admin}/>
        </Switch>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
