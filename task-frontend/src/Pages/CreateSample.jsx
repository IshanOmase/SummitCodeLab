import React, { useState } from "react";
import axios from 'axios';

function CreateSample(){
    
    const [machineStatus, setMachineStatus] = useState();
    const [vibration, setVibration] = useState(); 

    const Submit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8005/createSample",{
            machine_status: machineStatus,
            vibration: vibration
        })
        .then(result => console.log(result))
        .catch(err => console.log(err));
    }

    return (
		<div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
			<div className='w-50 bg-white rounded p-3'>
				<form onSubmit={Submit}>
					<h2>Add Machine Details</h2>
					<div className='mb-2'>
						<label htmlFor="">Machine Status</label>
						<input type="number" placeholder='Enter Machine Status' className='form-control'
                        onChange={(e) => setMachineStatus(e.target.value)}/>
					</div>
					<div className='mb-2'>
						<label htmlFor="">Vibration</label>
						<input type="number" placeholder='Enter Vibration' className='form-control'
                         onChange={(e) => setVibration(e.target.value)}/>
					</div>
					<button className='btn btn-success'>Submit</button>
				</form>
			</div>
		</div>
	)
}

	
	
export default CreateSample;