import React, { useState } from "react";
import { Button } from "react-bootstrap";
import TimelineChartContainer from "../Containers/TimelineChartContainer";
import LocationTemperature from "../Components/LocationTemperature";

function Sample(){    

    const [interval, setInterval] = useState('1hr'); // Default interval is 1 hour

    const handleIntervalChange = (newInterval) => {
        console.log('Interval changed to:', newInterval);
        setInterval(newInterval);
    };

	return (
        <div>
            <div  className="container mt-3 d-flex justify-content-center">
                <LocationTemperature />
            </div>
            <div className="container mt-3 d-flex justify-content-end">
                <div className="row">
                    <div className="col">
                        <button onClick={() => handleIntervalChange('1hr')} style={{ marginRight: '10px' }} className="btn btn-light mr-2 float-left" >1 hr</button>
                        <button onClick={() => handleIntervalChange('8hr')} style={{ marginRight: '10px' }} className="btn btn-primary mr-2 float-left">8 hr</button>
                        <button onClick={() => handleIntervalChange('24hr')} style={{ marginRight: '10px' }} className="btn btn-secondary float-left">24 hr</button>
                    </div>
                    
                </div>
            </div>
            <div className="container mt-3 d-flex justify-content-start">
                Cycle Status
            </div>
            <TimelineChartContainer interval={interval} />
        </div>    
     
    )	
}


export default Sample;