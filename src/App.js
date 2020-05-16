import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CollectionsPage from "./pages/CollectionsPage";
import CreateCollectionPage from "./pages/CreateCollectionPage";
import ItemsPage from "./pages/ItemsPage";
import ItemPage from "./pages/ItemPage";
import AddItemPage from "./pages/AddItemPage";
import EditCollectionPage from "./pages/EditCollectionPage";
import CreateCustomPage from "./pages/CreateCustomPage";
import AllItemsPage from "./pages/AllItemsPage";
import EditItemPage from "./pages/EditItemPage";
import { ToastContainer } from "react-toastify";

//waiting for api!!!
function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Header />
      <Switch>
        <Route exact path="/" component={CollectionsPage} />
        <Route exact path="/create" component={CreateCollectionPage} />
        <Route exact path="/collection/:id" component={ItemsPage} />
        <Route exact path="/item/:id" component={ItemPage} />
        <Route exact path="/addItem/:id" component={AddItemPage} />
        <Route exact path="/edit/:id" component={EditCollectionPage} />
        <Route exact path="/createCustom" component={CreateCustomPage} />
        <Route exact path="/allItems" component={AllItemsPage} />
        <Route exact path="/editItem/:id" component={EditItemPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
