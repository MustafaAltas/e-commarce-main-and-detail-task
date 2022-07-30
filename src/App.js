import { Provider } from "react-redux";
import store from "./redux/store";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </div>
  );
}

export default App;
