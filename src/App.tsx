import smoothcroll from 'smoothscroll-polyfill';
import store, { StoreContext } from './store';
import Layout from './layout';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

const App: React.FC = () => {
  smoothcroll.polyfill();

  return (
    <div className="App">
      <StoreContext.Provider value={store}>
        <Layout />
      </StoreContext.Provider>
    </div>
  );
};

export default App;
