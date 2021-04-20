import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'reactstrap';
import AppNavBar from './components/AppNavBar';
import ShoppingList from './components/ShoppingList';
import LoadingSpinner from './components/LoadingSpinner';
import ItemModal from './components/ItemModal';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppNavBar/>
        <Container>
          <ItemModal />
          <LoadingSpinner />
          <ShoppingList/>
        </Container>
      </div>
    </Provider>
  );
}

export default App;
