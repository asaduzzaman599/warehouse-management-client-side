import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import PageTitle from './Components/Shared/PageTitle/PageTitle';
import Home from './Components/Home/Home';
import Additem from './Components/AddItem/Additem';
import Header from './Components/Shared/Header/Header';
import Footer from './Components/Shared/Footer/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ManageItem from './Components/ManageItems/ManageItem';
import Myitems from './Components/Myitems/Myitems';
import UpdateStock from './Components/UpdateStock/UpdateStock';
import Login from './Components/Auth/Login/Login';
import Register from './Components/Auth/Register/Register';

function App() {
  return (
    <div className="App bg-blue-50">

      <Header></Header>
      <ToastContainer />
      <Routes>
        <Route path='/' element={
          <PageTitle title={"Home"}><Home></Home></PageTitle>
        }></Route>
        <Route path='/add' element={
          <PageTitle title={"Add Item"}><Additem></Additem></PageTitle>
        }></Route>
        <Route path='/manage' element={
          <PageTitle title={"Manage Items"}><ManageItem></ManageItem></PageTitle>
        }></Route>
        <Route path='/myitems' element={
          <PageTitle title={"My Items"}><Myitems></Myitems></PageTitle>
        }></Route>
        <Route path='inventory/:id' element={
          <PageTitle title={"Items Stock"}><UpdateStock></UpdateStock></PageTitle>
        }></Route>
        <Route path='/login' element={
          <PageTitle title={"Login"}><Login></Login></PageTitle>
        }></Route>
        <Route path='/register' element={
          <PageTitle title={"Register"}><Register></Register></PageTitle>
        }></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
