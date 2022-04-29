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
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
