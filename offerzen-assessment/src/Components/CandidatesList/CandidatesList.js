import React, { Component } from 'react';
import Candidate from '../Candidate/Candidate'
import './CandidatesList.css';

/*
 * List of movies in the app.
 */
class CandidatesList extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let data = this.props.data;	
        
        const candidateListArray = data.map((candidate, i) => {
            var marginTop = 100 + (48 * i);
            var marginRight = 818 - (56 * i);
            var imgMarginTop = 95 + (48 * i);
            marginTop.toString();
            marginRight.toString();
            imgMarginTop.toString();
            return ( <Candidate data={candidate} marginTop={marginTop+'px'} imgMarginTop={imgMarginTop+'px'}/>  )
        });
        
        return (
            <div>
                <table>
                    <div className='candidateList'>
                        <div className='tableHeaders'>
                            <div className='candidate'>Candidate</div>
                            <div className='role'>Role</div>
                            <div className='lastComm'>Last Communication</div>
                            <div className='salary'>Salary</div>
                            <div className='sentBy'>Sent by</div>
                        </div>
                    </div>
                </table>
                <div>
                    
                {candidateListArray}
                </div>
                <div className='interviews'>7 interview requests</div>
            </div>
        );
    }
};

export default CandidatesList;