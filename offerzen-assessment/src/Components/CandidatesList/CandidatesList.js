import React, { Component } from 'react';
import Candidate from '../Candidate/Candidate'
import './CandidatesList.css';
import upArrow from '../SortArrows/up.png';
import downArrow from '../SortArrows/down.png';

//this is the candidateList class.
//this is where you sort the list 
class CandidatesList extends Component {
    constructor(props) {
        super(props)     
        this.state = {
            data: props.data
        };
		this.archive = this.archive.bind(this);
        this.sortUp = this.sortUp.bind(this);
        this.sortDown = this.sortDown.bind(this);
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

    sortUp () {
        var newList = [];

        this.props.data
        .sort((a, b) => a.last_comms.date_time.localeCompare(b.last_comms.date_time))
        .map((item, i) => newList.push(item));

        
        this.setState({data:newList});
    };

    sortDown () {
        var newList = [];

        this.props.data
        .sort((a, b) => b.last_comms.date_time.localeCompare(a.last_comms.date_time))
        .map((item, i) => newList.push(item));

        
        this.setState({data:newList});
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
                            <div className='lastComm'>
                                Last Communication
                                <img className='arrow' src={upArrow} onClick={this.sortUp}></img> 
                                <img className='arrow' src={downArrow} onClick={this.sortDown} style={{marginTop:'5px'}}></img>
                            </div>
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