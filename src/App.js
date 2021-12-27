import './App.css';
import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
// import {HashRouter as Router, Switch,Route} from "react-router-dom";  
import LoadingBar from 'react-top-loading-bar'

const App =()=>  {
const pageSize = 6;
const apiKey = process.env.REACT_APP_NEWS_API
const [progress, setProgress] = useState(0) 
    return (
      <div> 
        <NavBar/>
        <a href="/"><News setProgress={setProgress} apiKey={apiKey} key="general" pagesize={pageSize} country="in" category="general"/></a>
        <LoadingBar 
        color='#C70039'
        height={3}
        progress={progress}
        />
      </div>


      // <div> 
      //   <Router>
      //   <NavBar/>
      //   <LoadingBar 
      //   color='#C70039'
      //   height={3}
      //   progress={progress}
      //   />
      //   <Switch>
      //     <Route exact path="/">             <News setProgress={setProgress} apiKey={apiKey} key="general" pagesize={pageSize} country="in" category="general"/>            </Route>
      //     <Route exact path="/business">     <News setProgress={setProgress} apiKey={apiKey} key="business" pagesize={pageSize} country="in" category="business"/>          </Route>
      //     <Route exact path="/entertainment"><News setProgress={setProgress} apiKey={apiKey} key="entertainment" pagesize={pageSize} country="in" category="entertainment"/></Route>
      //     <Route exact path="/general">      <News setProgress={setProgress} apiKey={apiKey} key="general" pagesize={pageSize} country="in" category="general"/>            </Route>
      //     <Route exact path="/health">       <News setProgress={setProgress} apiKey={apiKey} key="health" pagesize={pageSize} country="in" category="health"/>              </Route>
      //     <Route exact path="/science">      <News setProgress={setProgress} apiKey={apiKey} key="science" pagesize={pageSize} country="in" category="science"/>            </Route>
      //     <Route exact path="/sports">       <News setProgress={setProgress} apiKey={apiKey} key="sports" pagesize={pageSize} country="in" category="sports"/>              </Route>
      //     <Route exact path="/technology">   <News setProgress={setProgress} apiKey={apiKey} key="technology" pagesize={pageSize} country="in" category="technology"/>      </Route>
      //   </Switch>
      //   </Router>
      // </div>

    )
 }
export default App;