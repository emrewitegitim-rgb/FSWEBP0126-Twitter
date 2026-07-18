import { Redirect, Route } from "react-router-dom/cjs/react-router-dom.min";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
    </div>
  );
}

export default App;
