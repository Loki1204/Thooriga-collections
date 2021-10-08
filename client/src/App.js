import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import ProductDetails from "./components/productDetails/ProductDetails";
import Auth from "./pages/auth/Auth";
import { AuthGlobalProvider } from "./context/authContext/AuthGlobalState";
import { ProductGlobalProvider } from "./context/productContext/ProductGlobalState";
import ProductsList from "./components/productsList/ProductList";
import Cart from "./pages/cart/Cart";
import { CartGlobalProvider } from "./context/cartContext/CartGlobalState";
import AboutUs from "./pages/aboutUs/AboutUs";
import ErrorBoundary from "./utils/ErrorBoundary";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <AuthGlobalProvider>
          <CartGlobalProvider>
            <ProductGlobalProvider>
              <Header />
              <ErrorBoundary>
                <Switch>
                  <Route path="/" exact component={Home} />
                  <Route path="/sarees" exact component={ProductsList} />
                  <Route path="/product/:id" exact component={ProductDetails} />
                  <Route path="/auth" exact component={Auth} />
                  <Route path="/cart" exact component={Cart} />
                  <Route path="/aboutus" exact component={AboutUs} />
                </Switch>
              </ErrorBoundary>
            </ProductGlobalProvider>
          </CartGlobalProvider>
        </AuthGlobalProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
