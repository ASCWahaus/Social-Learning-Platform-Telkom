import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import React from "react";
import Homepage from "./pages/homepage";
import Login from "./pages/Login";
import Discover from "./pages/discoverpage";
import Konten from "./pages/konten";
import NotFound from "./pages/notfound";
import prevideo from "./pages/previewvideo";
import UserForm from "./pages/UserForm";
import Success from "./component/FormRegister/Success";
import PostDetails from "./component/PostDetails/PostDetails";
import MyContent from "./pages/MyContent";
import MyProfile from "./pages/MyProfile.js";
import PrivateRoute from "./component/routing/PrivateRoute";
import Testimoni from "./pages/Testimoni";

function App() {
  // const user = JSON.parse(localStorage.getItem("profile"));

  return (
    <Router>
      <Switch>
        <PrivateRoute path="/discover" exact component={Discover} />
        <Route path="/" exact component={Homepage} />
        <Route path="/register" exact component={UserForm} />
        <Route path="/login" exact component={Login} />
        <Route path="/testimoni" exact component={Testimoni} />
        <Route path="/contents" exact component={Konten} />
        <PrivateRoute path="/contents/search" exact component={Konten} />
        <PrivateRoute path="/contents/:id" exact component={PostDetails} />
        <PrivateRoute path="/contents/category/:category" component={Konten} />
        <PrivateRoute path="/mycontent" exact component={MyContent} />
        <PrivateRoute path="/video/:id" exact component={prevideo} />
        <PrivateRoute path="/myprofile" exact component={MyProfile} />
        <Route path="/success" exact component={Success} />
        <Route path="*" exact component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
