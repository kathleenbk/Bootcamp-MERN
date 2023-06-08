import './App.css';
import {Routes, Route, Navigate, BrowserRouter} from 'react-router-dom';
import Create from './components/create';
import Edit from './components/edit';
import Main from './components/main';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <h1>Favorite authors</h1>
    </div>
    <Routes>
      <Route path='/authors' element={<Main />}/>
      <Route path='/:id' element={<Edit />}/>
      <Route path='/create' element={<Create />}/>
      <Route path='*' element={<Navigate to='/authors' replace />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
