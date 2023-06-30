import CardList from './components/card-list/cardList.component';
import SearchBox from './components/serach-box/searchBox.component';
import './App.css';
import { useEffect, useState } from 'react';

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  const [searchedString, setSearchedString] = useState('');


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then((users) => {
        setMonsters(users);
      });
  }, []);

  useEffect(() => {
    console.log(searchedString)
    if (searchedString === '' || !searchedString) {
      setFilteredMonsters(monsters);
    }
    else {
      setFilteredMonsters(monsters.filter((monster) => {
        return monster.name.toLowerCase().includes(searchedString)
      }));
    }
  }, [monsters, searchedString]);

  const onChangeSearch = (event) => {
    if (monsters.length > 0) {
      let searchedString = event.target.value.toLowerCase();
      setSearchedString(searchedString);
    }
  };

  return (
    <div className="App" >
      <div className='content'>
        <h1 className='app-title'>Monster cats</h1>
        <p className='app-description'>The monster cats will come to the Earth as soon as possible, so it's your chance to know more about them... </p>
        <SearchBox nameOfSearch='monsters' onChangeHandler={onChangeSearch} />
        <CardList list={filteredMonsters} />
      </div>
      <footer className='footer'>
        <p>Designed by <a href='https://www.linkedin.com/in/ahmad-nour-al-sabaggh-51b474183/' class="white-link">Ahmad Nour Al-Sabaggh</a> </p>
      </footer>
    </div>
  );
}

export default App;