import "./App.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from "./components/Auth/Navbar";
import { Navigation } from "./components/Navigation";


function App() {
  return (
    <>
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Link to="/auth/login">Login</Link> */}
          <Route path="/auth">
            <Navbar/>
            <AuthRoutes />
            {/* import { useHistory } from 'react-router-dom';
            const history = useHistory();
            history.push('/dashboard'); */}
          </Route>
          <Route path="/dashboard">
              <Dashboard />
              <Navigation />
            </Route>
            <Route path="/appointments">
            
              <Appointments />
              <Navigation />
            </Route>
            <Route path="/profile/:id">
              
              <Profile />
              <Navigation />
            </Route>
        </Switch>
      </div>
    </Router>
    </>
  );
}

const AuthRoutes = () => {
  return (
    <Switch>
      <Route path="/auth/login" component={Login} />
      <Route path="/auth/signup" component={Signup} />
    </Switch>
  );
};

export default App;
