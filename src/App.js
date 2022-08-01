import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <Router>
      <Switch>
        {/** 첫번째 매칭되는 것을 반환하기 때문에 "/"가 최상단에 위치한 경우 "/movie"에 접근할 수 없음 */}
        <Route path="/movie">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
        
      </Switch>
    </Router>
  );
}

export default App;
