import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, MovieDetail, NotFound } from "./views";
import { Header } from "./components";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Header />
            <Home />
          </Route>
          <Route path="/detail/:id">
            <Header />
            <MovieDetail />
          </Route>
          <Route path="*">
            <Header />
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
