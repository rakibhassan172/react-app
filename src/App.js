import './App.scss';
import NameList from './Components/NameList/NameList';
import InforCard from './Components/InfoCard/InfoCard';
import { BrowserRouter, Route, Routes, useLocation, useParams } from 'react-router-dom';

function App() {

  const path = window.location.pathname.split('/')

  const id = path[path.length-1]

  console.log(path)

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/react-app' element={<NameList />}/>
          <Route path="/users/:id" element={<InforCard id={path}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
