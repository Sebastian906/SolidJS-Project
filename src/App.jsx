import banner from './assets/banner.png';
import Card from './components/Card';

function App() {
  return (
    <div>
      <header>
        <h1>Solid App</h1>
      </header>
      <img src={banner} alt="site banner" />
      <Card/>
    </div>
  );
}

export default App;
