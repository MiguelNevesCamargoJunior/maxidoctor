import { WelcomeScreen } from "./pages/WelcomeScreen";
import "./styles/global.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { MainComponent } from "./pages/Main/MainComponent";

export function App() {
  return (
 
      <main className="mainContainer">
        <Router>
          <Switch>
            <Route exact path="/">
              <WelcomeScreen />
            </Route>
            <Route path="/maxidoctor">
              <MainComponent />
            </Route>
          </Switch>
        </Router>
      </main>
  
  );
}
