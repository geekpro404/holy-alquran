import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './app/store'
import 'bootstrap/dist/css/bootstrap.css';
import Root from "./Root";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Root />
      </Provider>
    </BrowserRouter>
  );
}

export default App;