import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import PageTitle from './Components/Shared/PageTitle/PageTitle';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={
          <PageTitle title={"Home"}><Home></Home></PageTitle>
        }></Route>
      </Routes>
    </div>
  );
}

export default App;
