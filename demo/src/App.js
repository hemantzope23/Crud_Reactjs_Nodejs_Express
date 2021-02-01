import React from "react";
// import React { Component } from 'react';
import "./App.css";
import Hello from './components/Hello';
import Inline from './components/Inline';
import './appStyles.css';
import styles from './appStyles.Modules.css';
import Messege from './components/Message';
import UserGreeting from './components/UserGreeting';
import Form from "./components/Form";
import LifecycleA from "./components/LifecycleA";
import FragmentDemo from "./components/FragmentDemo";
import Table from "./components/Tables";
import PureComp from "./components/PureComp";
import ParentComp from './components/ParentComp';
import RefeDemo from './components/RefeDemo';
import Input from './components/Input';
import FocusInput from './components/FocusInput';
import PortalDemo from './components/PortalDemo';
import ShoppingList from './Learn/ShoppingList';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import Home from './Frontend/Home';
import ClickCounterTwo from "./components/ClickCounterTwo";
import HoverCounterTwo from "./components/HoverCounterTwo";

function App() {
  return (
      <div className="App">
        {/* <Home /> */}
        {/* <ErrorBoundary>
        <Hero heroName='Batman'/>
        </ErrorBoundary> */}

        {/* <ErrorBoundary>
        <Hero heroName='Suprerman'/>
        </ErrorBoundary> */}

        {/* <ErrorBoundary>
        <Hero heroName='Joker'/>
        </ErrorBoundary> */}

        {/* <ShoppingList /> */}
        {/* <PortalDemo /> */}
        {/* <FocusInput /> */}
        {/* <Input /> */}
        {/* <RefeDemo /> */}
        {/* <ParentComp /> */}
        {/* <PureComp /> */}
        {/* <Table /> */}
        {/* <FragmentDemo /> */}
        {/* <LifecycleA /> */}
        {/* <Form /> */}
        {/* <h1 className='error'>Error</h1> */}
        {/* <h1 className= {styles.success} >Success</h1> */}
        {/* <Hello/> */}
       {/* <Inline />  */}
       {/* <UserGreeting /> */}
       {/* <Messege /> */}
       <ClickCounterTwo />
       <HoverCounterTwo /> 
      </div>
    
  );
}

export default App;
