import React, { Component } from 'react';
import './Search.css';

/* 
 * Candidate search input. You also filter the candidate list here using the archive checkbox
 */
class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
            checked: false
        };

        this.onInputChange = this.onInputChange.bind(this);
        this.onArchiveSelected = this.onArchiveSelected.bind(this);
    };

    onInputChange(event) {
        // filter data at every keystroke in the input form
        // lifting up state here, we are calling `filterData`
        // which was passed in `props` from its parent component 
        event.preventDefault();
        this.props.filterData(event.target.value);
    };

    onArchiveSelected(event) {
        //filters using archive
        // event.preventDefault();
        this.setState({checked: !this.state.checked});

        this.props.filterArchivedData(this.state.checked);
    };
    render() {
        return (
          <div >
                <input className='input'
                  type="text"
                  value={this.state.term}
                  onChange={this.onInputChange}
                  placeholder="Search" 
                />
                <div className='checkbox'>
                    <input type="checkbox" onChange={this.onArchiveSelected} defaultChecked={this.state.checked}/>
                </div>
                <div className='text'>
                    Show archived
                </div>
            </div>
        );
      }
};

export default Search;
