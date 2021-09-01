import './App.css';
import {Route, Switch} from "react-router-dom";
import Welcome from './pages/Welcome';
import Products from './pages/Products';
import MainHeader from './components/MainHeader';
import ProductDetails from './pages/ProductDetails';

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
      <Switch>
      <Route path="/welcome">
      <Welcome />
      </Route>
      <Route path="/products" exact>   {/*Both routes are active because they begin with the same path. 
                                 That's how react router works. 
                                 If you don't want this behaviour use the Switch component. 
                                 now the product details does not appear on the screen because react finds the first match which is /products. 
                                 We can fix this by using the exact prop.
                                 */}
      <Products/>
      </Route>
      <Route path="/products/:productId">
      <ProductDetails/>
      </Route>
      </Switch>
    </div>
  );
}

export default App;
