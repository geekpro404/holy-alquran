import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './app/store';
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