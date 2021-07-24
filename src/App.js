import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Page1 from './component/pages/page -1'
import Page2 from './component/pages/page-2';
import Page3 from './component/pages/page-3';
import Navbar from './component/layout/Navbar';
import {BrowserRouter as Router ,Route ,Switch} from  'react-router-dom'
import NotFound from './component/pages/Not Found';
import AddUser from './component/Users/AddUser';
import EditUser from './component/Users/EditUser';
import User from './component/Users/User';



function App() {
  return (
    <Router>
    <div className="App">
    <Navbar />
    <Switch>
      
      <Route exact path="/" component={Page1} />
      <Route exact path="/page2" component={Page2} />
      <Route exact path="/page3" component={Page3} />
      <Route exact path="/Users/AddUser" component={AddUser} />
      <Route exact path="/users/edit/:id" component={EditUser} />
      <Route exact path="/Users/:id" component={User} />
      
      <Route component={NotFound} />
    </Switch>
     </div>
    </Router>
  );
}

export default App;
