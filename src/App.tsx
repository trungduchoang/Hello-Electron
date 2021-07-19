import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DragAndDropMe from './mocks/DragAndDropMe';

const Hello = () => {
  return (
    <div>
      <DragAndDropMe />
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Hello} />
      </Switch>
    </Router>
  );
}
