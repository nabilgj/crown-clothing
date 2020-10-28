import HomePage from "./pages/homepage/homepage";

import "./App.css";

import { Switch, Route } from "react-router-dom";

import ShopPage from "./pages/shop/shop";

function App() {
  return (
    <div>
      {/* <HomePage /> */}
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
