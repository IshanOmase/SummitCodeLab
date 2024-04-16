import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div>
      <BrowserRouter>
						<Routes>
							<Route path= '/' element={}></Route>
							<Route path= '/addSample' element={}></Route>
							<Route path= '/update' element={}></Route>
							<Route path= '/' element={}></Route>
						</Routes>
					</BrowserRouter>
      
    </div>
  )
}

export default App
