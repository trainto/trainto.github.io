import smoothcroll from 'smoothscroll-polyfill';
import Layout from './layout';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import GlobalStore from './store/global-store';

const App: React.FC = () => {
  smoothcroll.polyfill();

  return (
    <div className="App">
      <GlobalStore.Provider>
        <Layout />
      </GlobalStore.Provider>
    </div>
  );
};

export default App;
