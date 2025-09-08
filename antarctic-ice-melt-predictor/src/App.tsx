import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import IceMeltChart from './components/IceMeltChart';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <h1>南極大陸の氷の溶解速度予測アプリ</h1>
        <Switch>
          <Route path="/" exact>
            <h2>ホーム</h2>
            <p>このアプリは南極大陸の氷の溶解速度を予測します。</p>
          </Route>
          <Route path="/chart" component={IceMeltChart} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;