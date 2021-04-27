import logo from './logo.svg';
import Header from './components/Header/Header';
import SearchInputText from './components/Search/Input/SearchInputText';
import SearchInput from './components/Search/Input/SearchInput';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <SearchInputText />
      <SearchInput />
    </div>
  );
}

export default App;
