import logo from './logo.svg';
import Header from './components/Header/Header';
import SearchInputText from './components/Search/Input/SearchInputText';
import SearchInput from './components/Search/Input/SearchInput';
import SearchResults from './components/Search/Results/SearchResults';
import SearchAndNominate from './components/SearchAndNominate/SearchAndNominate';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="search-and-nominate">
        <SearchAndNominate />
      </div>
    </div>
  );
}

export default App;
