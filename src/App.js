import logo from './logo.svg';
import './App.css';
import GetCards from './components/home';
import { Provider } from 'react-redux';
import store from './redux/store';
import Chat from './components/chat'

function App() {
  return (
    <div className="App">
      {/* <Provider store={store}>
        <GetCards></GetCards>
      </Provider>  */}
      <Chat></Chat>
      
    </div>
  );
}

export default App;
