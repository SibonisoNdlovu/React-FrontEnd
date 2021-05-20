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
    };

    onInputChange(event) {
        // filter data at every keystroke in the input form
        // lifting up state here, we are calling `filterData`
        // which was passed in `props` from its parent component 
        this.props.filterData(event.target.value);
        event.preventDefault();
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
                    <input type="checkbox" id="check"/> 
                </div>
                <div className='text'>
                    Show archived
                </div>
            </div>
        );
      }
};

export default Search;
