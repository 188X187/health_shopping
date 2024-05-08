import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import InfoPages from './informations/InfoPages';
import BasicExample from './informations/InfoPages1';
import List from './pages/List';
import ListCard from './pages/ListCard';

import Layout from './layout/Layout';

function App() {
  return (
    <div className="App">
      <BasicExample/>
      <Layout />
    </div>
  );
}

export default App;
