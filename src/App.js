import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CollectionsPage from "./pages/CollectionsPage";
import CreateCollectionPage from "./pages/CreateCollectionPage";
import ItemsPage from "./pages/ItemsPage";
import ItemPage from "./pages/ItemPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={CollectionsPage} />
        <Route exact path="/create" component={CreateCollectionPage} />
        <Route exact path="/collection/:id" component={ItemsPage} />
        <Route exact path="/item/:id" component={ItemPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
