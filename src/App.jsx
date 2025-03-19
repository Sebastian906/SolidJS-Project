import { createSignal } from 'solid-js';
import banner from './assets/banner.png';
import Card from './components/Card';

function App() {

  const [darkTheme, setDarkTheme] = createSignal(false);

  function toggleTheme() {
    setDarkTheme(!darkTheme());

  }

  return (
    <div class='container m-auto'>
      <header
        class='my-4 p-2 text-xl flex items-center gap-4'
        classList={{'bg-neutral-900': darkTheme(), 'text-neutral-100': darkTheme()}}
      >
        <span
          class='material-symbols-outlined cursor-pointer'
          onClick={toggleTheme}
        >
          light_mode
        </span>
        <h1>Solid App</h1>
      </header>
      <img class='rounded-md' src={banner} alt="site banner" />
      <div class='grid grid-cols-4 gap-10 my-4'>
        {/*<Card title='Solid tee'/>*/}
        <Card rounded={true} flat={false}>
          <h2>Solid Tee, Black</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque ipsam maxime delectus ut sint repellendus.</p>
          <button class="btn">View</button>
        </Card>
        <Card rounded={false} flat={true}>
          <h2>Solid Tee, White</h2>
          <button class="btn">View</button>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque ipsam maxime delectus ut sint repellendus.</p>
          <p>Only $10</p>
        </Card>
      </div>
    </div>
  );
}

export default App;
