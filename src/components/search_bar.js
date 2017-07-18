import React, {Component} from 'react';
import ReactDOM from 'react-dom';

// this is a functional component
// const SearchBar = () => {
//   return <input />;
// };

// class based component extending react component
// if SearchBar changes its state, the render function would rerun
// each class component can be declared as its own state object
class SearchBar extends Component{
  // any class component must have a render method with jsx

  // constructor method to set initial state
  // this is called whenever a new instance of SearchBar is created
  constructor(props){
    // this is because your class is extending Component and you are calling the parent component
    super(props);

    this.state = { term: ''}; // pass it an object with properties
  }
  render() {
    // return <input onChange = {event => console.log(event.target.value)} />; // pass property onChange
    return (
      <nav className="row search-bar">
        <div className="input-group" aria-describedby="video-search-bar">
          <span className="input-group-addon" id="video-search-bar">Search for a video</span>
          <input
              type="search"
              className="form-control"
              value = {this.state.term}
              onChange = { event => this.onInputChange(event.target.value) } />

        </div>
      </nav>
    );

    onInputChange(term) {
      this.setState({ term });
      this.props.onSearchTermChange(term);
    }
  }

  // writing an event handler, can be made on one line with arrow function
  // onInputChange(event){
  //   console.log(event.target.value);
  // }
}

// functional vs class based...only need class based if you need extra functionality

// export component so you can import it in other files.
export default SearchBar;
