import React from 'react';
import './Candidate.css';

const Candidate = ({data, marginTop,imgMarginTop}) => {
    return (
        <div>
            <div style={{ backgroundColor: "#F9FAFB"}}>
                <div className='candidate' style={{marginTop:imgMarginTop, paddingLeft:'125px', width:'100px', paddingBottom:'45px'}}>
					<img src={data.image} style={{width:"30%", height:"200%", borderRadius:"50%", float:"right"}}/>
                </div>
                <div className='candidate' style={{marginTop:marginTop, paddingLeft:'165px', width:'100px'}}>{data.candidate}</div>
                <div className='role' style={{marginTop:marginTop, paddingLeft:'125px'}}>{data.role}</div>
                <div className='lastComm' style={{marginTop:marginTop, paddingLeft:'125px'}}>{data.last_comms.description}</div>
                <div className='salary' style={{marginTop:marginTop, paddingLeft:'125px'}}>{data.salary}</div>
                <div className='sentBy' style={{marginTop:marginTop, paddingLeft:'125px'}}>{data.sent_by}</div>
                <div className='archive' style={{marginTop:marginTop, paddingLeft:'125px'}}>
                    {
                        data.archived? 'Unarchive': 'Archive'
                    }
                </div>
            </div>
        </div>
    );
}

export default Candidate;
