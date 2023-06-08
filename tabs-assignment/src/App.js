import React from 'react';
import Tabs from './components/tabs'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='main-container'>
        <Tabs tabsArray={[
          {tabName:"Tab 1", tabContent:"Tab 1 content is showing here."}, {tabName:"Tab 2", tabContent:"Tab 2 content is showing here."}, {tabName:"Tab 3", tabContent:"Tab 3 content is showing here."}]}/>
      </div>
    </div>
  );
}

export default App;
