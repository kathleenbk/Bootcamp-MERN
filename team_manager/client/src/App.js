
import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';
import './App.css';
import Create from './components/create';
import Main from './components/main';
import Status from './components/status';

function App() {
  return (
    <BrowserRouter>
    <div className="App header">
      <h3><Link to={'/players/list'}>Manage Players</Link>  |  <Link to={'/status/game/1'}>Manage Player Status</Link></h3>
      <Routes>
        <Route path='/players/list' element={<Main />}/>
        <Route path='/status/game/:gameId' element={<Status />} />
        <Route path='/players/addplayer' element={<Create />} />
        <Route path='*' element={<Navigate to='/players/list' replace />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
