import React, { Component } from 'react';
import './Search.css';

/* 
 * User search input.
 */
class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ''
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
        event.preventDefault();
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
