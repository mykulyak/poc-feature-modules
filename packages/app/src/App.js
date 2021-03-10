import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import context from "@pocfm/core";

import LoginButton from "./LoginButton";

export default function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <nav>
            <ul>
              {context.menus.map(({ urlExp, text }) => (
                <li key={urlExp}>
                  <Link to={urlExp}>{text}</Link>
                </li>
              ))}
              <li>
                <LoginButton />
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          {context.routes.map(({ urlExp, component: Component }) => (
            <Route
              key={urlExp}
              path={urlExp}
              render={() => {
                const Lazy = lazy(Component);
                return (
                  <Suspense fallback={<p>Loading</p>}>
                    <Lazy />
                  </Suspense>
                );
              }}
            />
          ))}
        </Switch>
      </Router>
    </div>
  );
}
