import logo from './logo.svg';
import './App.css';
import img from './Q.jpg';


document.title = 'Queering Religion';
function App() {
  return (
    <div>
      <header title='Hello'>
        <img src={img} style={{ width: '100%' }} />
      </header>
    </div>
  );
}

export default App;
