import './assets/main.css';
import AppRouter from './router';
const CardData = require("./firebase");

const App = () => {
  return (
    <div className='' id='dark'>
      <AppRouter />
    </div>
  );
};

export default App;
