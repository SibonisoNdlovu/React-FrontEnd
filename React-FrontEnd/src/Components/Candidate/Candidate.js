import React from 'react';
import './Candidate.css';

//this is the candidate class, you can archive a candidate here

const Candidate = ({archive, data, marginTop,imgMarginTop}) => {
    return (
        <div style={{ color: data.archived? "#F9FAFB" : ""}}>
            <div>
                <div className='candidate' style={{marginTop:imgMarginTop, paddingLeft:'125px', width:'100px', paddingBottom:'45px'}}>
					<img src={data.image} style={{width:"30%", height:"200%", borderRadius:"50%", float:"right"}}/>
                </div>
                <div className='candidate' style={{marginTop:marginTop, paddingLeft:'165px', width:'100px'}}>{data.candidate}</div>
                <div className='role' style={{marginTop:marginTop, paddingLeft:'125px'}}>
                    {data.role?data.role: '-'}
                </div>
                <div className='lastComm' style={{marginTop:marginTop, paddingLeft:'140px'}}>
                    {data.last_comms.unread? 
                    <div className='oval'></div>:null}
                    {data.last_comms.description + " "+ data.last_comms.date_time.substr(0,11)}
                </div>
                <div className='salary' style={{marginTop:marginTop, paddingLeft:'125px'}}>{data.salary}</div>
                <div className='sentBy' style={{marginTop:marginTop, paddingLeft:'125px'}}>{data.sent_by}</div>
                <div className='archive' style={{marginTop:marginTop, paddingLeft:'125px'}}>
                    {
                        data.archived?  <label onClick={function(e) { archive(data);}}>Unarchive</label>
                        : <label onClick={function(e) { archive(data);}}>Archive</label>
                    }
                </div>
            </div>
        </div>
    );
}

export default Candidate;
