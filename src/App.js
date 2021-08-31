import './App.css';
import {Route} from "react-router-dom";
import Welcome from './pages/Welcome';
import Products from './pages/Products';
import MainHeader from './components/MainHeader';
function App() {
  /* 
    React router handles different paths and loads components based on those given paths.
    http://ourdomain/ => Component A
    http://ourdomain/products => Component B 

    The components handled by react-router can be considered special. It is common to put these components on a separate folder called pages or screens.
    
  */
  return (
    <div className="App">
      <MainHeader />
      <Route path="/welcome">
      <Welcome />
      </Route>
      <Route path="/products">
      <Products/>
      </Route>
    </div>
  );
}

export default App;
