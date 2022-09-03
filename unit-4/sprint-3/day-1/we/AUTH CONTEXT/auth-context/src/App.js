
import './App.css';
import { Navbar } from './Components/navbar';
import { StatusShow } from './Components/statusShow';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <StatusShow />
      </header>
    </div>
  );
}

export default App;
