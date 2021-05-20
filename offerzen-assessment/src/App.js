import React, { Component } from 'react';
import Search from './Components/Search/Search';
import CandidateList from './Components/CandidatesList/CandidatesList.js';
import mockData from './MockData/data.json'
import './App.css';

/* 
 * Main component. The first component loaded in the app
 * Notes:
 * The main state is kept here and passed down to other components using props.
 */
class App extends Component {
  constructor(props) {
    super(props)
    //mockdata is used here as provided
    this.state = {
      data: mockData,
    };

    this.filterData = this.filterData.bind(this);
    this.filterArchivedData = this.filterArchivedData.bind(this);
  };

  filterData(value) {
    // filter candidates by name
    let data = Object.values(mockData).filter(candidate => candidate.candidate.match(new RegExp(value, 'i')));
    this.setState({ data:data });
  };

  filterArchivedData(value) {
    // filter candidates by archived
    let data = Object.values(mockData).filter(candidate => candidate.archived === value);
    this.setState({ data:data });
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <div className="logo"></div>
        </div>   
        
          <div className="search">
              <Search filterData={this.filterData} filterArchivedData={this.filterArchivedData} />
          </div>
         
        <div className="body">  
          <CandidateList
            data={this.state.data}
          />
        </div>
      </div>
    );
  }
}

export default App;
