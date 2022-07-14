import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import BookList from './components/BookList';
import Categories from './components/Categories';
import Navigation from './components/Navigation';
import store from './redux/configureStore';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Navigation />
          <Routes>
            <Route exact path="/" element={<BookList />} />
            <Route path="/categories" element={<Categories />} />
          </Routes>
        </Router>

      </div>
    </Provider>
  );
}

export default App;
