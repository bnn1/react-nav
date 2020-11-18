import './App.css';
import Nav from './Components/Nav';
function App() {
  const menuItems = ['Home', 'Projects', 'Contact Me'];
  return (
    <>
      <Nav menuItems={menuItems} />
    </>
  );
}

export default App;
