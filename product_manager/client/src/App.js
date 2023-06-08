import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import View from './components/view';
import Form from './components/form';
import Edit from './components/edit';



function App() {

  
  return (
    <BrowserRouter>
      <div className="App">


        <Routes>
          <Route path='/' element={<Form />} />
          <Route path='/:id' element={<View />} />
          <Route path='/:id/edit' element={<Edit />} />

        </Routes>


      </div>
    </BrowserRouter>

  );
}

export default App;
