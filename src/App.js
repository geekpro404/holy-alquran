import { Provider } from 'react-redux'
import store from './app/store'
import 'bootstrap/dist/css/bootstrap.css';
import Root from "./Root";

function App() {
  return (
    <>
      <Provider store={store}>
        <Root />
      </Provider>
    </>
  );
}

export default App;