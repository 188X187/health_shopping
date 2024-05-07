import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import List from './pages/List';
import ListCard from './pages/ListCard';

function App() {
  return (
    <div className="App">
      <List />
      <ListCard />
    </div>
  );
}

export default App;
