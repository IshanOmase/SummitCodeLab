
import './App.css'
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateSample from './Pages/CreateSample';
import Sample from './Pages/Sample';
import SummaryTable from './Pages/SummaryTable';

function App() {


  	return (
   		<div>
      	<BrowserRouter>
			<Routes>		
				<Route path= '/' element={<Sample />}></Route>
				<Route path= '/addSample' element={<CreateSample />}></Route>
				<Route path= '/summary' element={<SummaryTable />}></Route>
				{/* <Route path= '/' element={}></Route> */}
			</Routes>
		</BrowserRouter>
      
    </div>
  )
}

export default App
