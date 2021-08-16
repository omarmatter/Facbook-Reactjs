import Home from "./pages/home/Home";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

function App() {

  return (


  <Router>
  <div className="App">
  
   <Switch>
     <Route exact path='/Home' component={Home}></Route>
     <Route exact path='/profile' component={Profile}></Route>
     <Route exact path='/' component={Login}></Route>
   </Switch>
 </div>
</Router>
  ) 
}


export default App;
