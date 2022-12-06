import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


const App = () => {

  const pageSize = 20;
  const apiKey = process.env.REACT_APP_API  //cwh_api_key='dbe57b028aeb41e285a226a94865f7a7'

  const [progress, setProgress] = useState(0)

  return (
    <div>
      <LoadingBar color='#f11946' progress={progress} />
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={< News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general" />} />
          <Route exact path="/business" element={< News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business" />} />
          <Route exact path="/entertainment" element={< News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment" />} />
          <Route exact path="/general" element={< News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general" />} />
          <Route exact path="/health" element={< News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health" />} />
          <Route exact path="/science" element={< News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science" />} />
          <Route exact path="/sports" element={< News setProgress={setProgress} apiKey={apiKey} key="sport" pageSize={pageSize} country="in" category="sports" />} />
          <Route exact path="/technology" element={< News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology" />} />
        </Routes>
      </Router>
    </div>
  )
}
export default App
