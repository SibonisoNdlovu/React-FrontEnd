import React, { Component } from 'react';
import Candidate from '../Candidate/Candidate'
import './CandidatesList.css';

/*
 * List of movies in the app.
 */
class CandidatesList extends Component {
    constructor(props) {
        super(props)     
        this.state = {
            data: props.data
        };
		this.archive = this.archive.bind(this);
    }

    archive(value) {
        var newlist=[];
        this.props.data.map((candidate, i) => {
          if(value.candidate === candidate.candidate){
            if(candidate.archived){
              candidate.archived = false;
            } else { candidate.archived = true}
          }
          newlist.push(candidate);
        });
    
        this.setState({data:newlist});
      };

    render() {
        let data = this.props.data;	
        
      const candidateListArray = data.map((candidate, i) => {
            var marginTop = 100 + (48 * i);
            var marginRight = 818 - (56 * i);
            var imgMarginTop = 95 + (48 * i);
            marginTop.toString();
            marginRight.toString();
            imgMarginTop.toString();
            return ( <Candidate archive={this.archive} data={candidate} marginTop={marginTop+'px'} imgMarginTop={imgMarginTop+'px'}/>  )
        });
        
        const numberOfInterviews = candidateListArray.length;   
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
                <div className='interviews'>{numberOfInterviews} interview requests</div>
            </div>
        );
    }
};

export default CandidatesList;