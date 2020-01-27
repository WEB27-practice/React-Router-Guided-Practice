import React from "react";
import Home from "./components/Home";
import ItemList from "./components/ItemList";
import Item from "./components/Item";
import { Route, Link } from "react-router-dom";
import "./styles.css";

const App = () => {
  return (
    <div className="App">
      <nav>
        <h1 className="store-header">
          Christina's Trinkets
        </h1>
        <Link to="/">Home</Link>
        <Link to="/item-list">Shop</Link>
      </nav>
        <Route exact path="/" component={Home}/>
        <Route path="/item-list">
          <ItemList />
        </Route>
    </div>
  );
};
export default App;
