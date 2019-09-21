import React, {Component} from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component' 
import { SearchBox } from './components/search-box/search-box.component'
class App extends Component{
  constructor(){
    super()
    this.state=
    {
      characters : [],
      searchField: ''
    }; 
    //this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users =>  this.setState({characters: users}))
  }
  handleChange = (e) => {
    this.setState({searchField : e.target.value});
  }
  render(){
    const {characters, searchField} = this.state;
    const filteredCharacters = characters.filter(
      character => character.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return(
      <>
      <div className="App">
        <h1>Image Show</h1>
        <>
      <SearchBox 
        placeholder='search characters'
        handleChange={this.handleChange}>
      </SearchBox>  
        {/* <input type='search' placeholder='search characters'
          onChange={e => {this.setState({ searchField:e.target.value },
          () => console.log(this.state));
        }}/>  */}
          
        <CardList characters = {filteredCharacters}>  
        </CardList>
        </>
    </div>
       </>
    )
  }
}

export default App;
