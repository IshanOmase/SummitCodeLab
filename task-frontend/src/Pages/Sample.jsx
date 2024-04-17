import React from "react";
import { Button } from "react-bootstrap";
import TimelineChartContainer from "../Containers/TimelineChartContainer";

function Sample(){    

	return (
        <div>
            <div className="container mt-3 d-flex justify-content-end">
                <div className="row">
                    <div className="col">
                        <button style={{ marginRight: '10px' }} type="button" className="btn btn-light mr-2 float-left" >1 hr</button>
                        <button style={{ marginRight: '10px' }} type="button" className="btn btn-primary mr-2 float-left">8 hr</button>
                        <button style={{ marginRight: '10px' }} type="button" className="btn btn-secondary float-left">24 hr</button>
                    </div>
                    
                </div>
            </div>
            <div className="container mt-3 d-flex justify-content-start">
                Cycle Status
            </div>
            <TimelineChartContainer />
        </div>    
     
    )	
}


export default Sample;