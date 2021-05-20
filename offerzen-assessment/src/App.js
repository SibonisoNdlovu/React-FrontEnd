import React, { Component } from 'react';
import Search from './Components/Search/Search';
import CandidateList from './Components/CandidatesList/CandidatesList.js';
import mockData from './MockData/data.json'
import './App.css';

/* 
 * Main component.
 * Notes:
 * The main state is kept here and passed down to other components using props.
 */
class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      ui: {
        isLoading: true
      },
      data: [],
      dataFiltered: []
    };

    this.filterData = this.filterData.bind(this);
  };

  filterData(value) {
    // filter candidates by name
    let data = Object.assign({}, this.state.data);
    let dataFiltered = Object.values(data).filter(candidate => candidate.candidate.match(new RegExp(value, 'i')));
    this.setState({ dataFiltered });
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <div className="logo"></div>
        </div>   
        
          <div className="search">
              <Search filterData={this.filterData} />
          </div>
         
        <div className="body">  
          <CandidateList
            isLoading={this.state.ui.isLoading}
            data={mockData}
          />
        </div>
      </div>
    );
  }
}

export default App;
