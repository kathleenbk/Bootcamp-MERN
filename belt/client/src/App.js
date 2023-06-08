import {Routes, Route, Navigate, BrowserRouter} from 'react-router-dom';
import './App.css';
import Create from './components/Create';
import Main from './components/Main';
import ViewOne from './components/ViewOne';

function App() {
  return (
    <BrowserRouter>
    <div className="App container">
    
    <Routes>
      <Route path='/pirates' element={<Main />} />
      <Route path='/pirates/new' element={<Create />} />
      <Route path='/pirates/:id' element={<ViewOne />} />
      <Route path='*' element={<Navigate to='/pirates' replace />}/>
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
