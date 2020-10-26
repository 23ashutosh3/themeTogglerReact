//import React, {Fragment} from "react"
//import Provider from "./provider"
//import Context from "./context"

//const Agents =()=>
//{
//  return <AgentOne />
//}

//const AgentOne =() =>{
//  return <AgentTwo/>
//}

//const AgentTwo =() =>{
//  return <AgentBond/>
//}

//const AgentBond =() =>{
//  return(
//    <Context.Consumer>
//      {
//        (context) => (
//          <Fragment>
//            <h3>Agent Informtion</h3>
//        <p>Mission Name: {context.data.mname}</p>
//        <h2>Mission Status: {context.data.accept}</h2>
//          <button onClick={context.isMissionAccepted}> Choose to accept</button>
//          </Fragment>
//        )
//      }
//    </Context.Consumer>
//  )
//}

//const App =()=>{
//  return (
//    <div>
//      <h1>Context API</h1>
//      <Provider>
//        <Agents />
//      </Provider>
//    </div>
//  )
//}

//export default App


import React,{useState} from 'react';
import ThemeContext from "./Context/ThemeContext"
import Header from "./Components/Header"
import HeroSection from "./Components/HeroSection"


const App =() =>
{
  const themeHook =useState("light")
  return (
    <ThemeContext.Provider value={themeHook}>
      <div><Header /><HeroSection /></div>
      

    </ThemeContext.Provider>
  )
}

export default App
